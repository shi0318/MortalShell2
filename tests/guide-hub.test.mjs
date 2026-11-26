import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';
import { guidePageSize } from '../src/utils/guide-pagination.mjs';

const GUIDES_DIR = new URL('../src/content/guides/', import.meta.url);

// Read a top-level frontmatter scalar. Anchored at line start so indented
// `sources:` entries (which repeat keys like `status:`) can never match.
function frontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?\\s*$`, 'm'));
  return match ? match[1].trim() : undefined;
}

// Reproduce the hub's ordering contract from the source files, so the expected
// slugs are derived rather than hardcoded and adding a guide cannot break this.
async function orderedGuideIds() {
  const files = (await readdir(GUIDES_DIR)).filter((name) => name.endsWith('.md'));
  const entries = [];

  for (const file of files) {
    const source = await readFile(new URL(file, GUIDES_DIR), 'utf8');
    const close = source.indexOf('\n---', 3);
    const frontmatter = close < 0 ? source : source.slice(0, close);
    if (frontmatterValue(frontmatter, 'draft') === 'true') continue;

    entries.push({
      id: file.replace(/\.md$/, ''),
      updatedAt: frontmatterValue(frontmatter, 'updatedAt') ?? '',
      order: Number(frontmatterValue(frontmatter, 'order') ?? 100),
    });
  }

  assert.ok(entries.length > guidePageSize(entries.length), 'expected more guides than one hub page');

  return entries
    .sort(
      (a, b) =>
        b.updatedAt.localeCompare(a.updatedAt) ||
        a.order - b.order ||
        a.id.localeCompare(b.id),
    )
    .map((entry) => entry.id);
}

test('guide hub promotes the most recently updated retail guides first', async () => {
  const html = await readFile(new URL('../dist/guide/index.html', import.meta.url), 'utf8');
  const start = html.indexOf('latest-guides');
  const end = start < 0 ? -1 : html.indexOf('</section>', start);
  const latest = start < 0 ? '' : html.slice(start, end < 0 ? html.length : end);

  assert.ok(latest, 'expected a latest guides section');

  const ordered = await orderedGuideIds();
  const pageSize = guidePageSize(ordered.length);

  for (const id of ordered.slice(0, pageSize)) {
    assert.ok(latest.includes(`href="/${id}/"`), `expected /${id}/ on hub page 1`);
  }

  const overflow = ordered[pageSize];
  assert.ok(
    !latest.includes(`href="/${overflow}/"`),
    `expected /${overflow}/ to be pushed to page 2`,
  );
});

test('guide pagination keeps all content on the first three pages and preserves legacy redirects', async () => {
  const ordered = await orderedGuideIds();
  const pageSize = guidePageSize(ordered.length);
  const firstPage = '../dist/guide/index.html';
  const laterPages = ['../dist/guide/page/2/index.html', '../dist/guide/page/3/index.html'];

  for (const [index, path] of [firstPage, ...laterPages].entries()) {
    const html = await readFile(new URL(path, import.meta.url), 'utf8');
    for (const id of ordered.slice(index * pageSize, (index + 1) * pageSize)) {
      assert.ok(html.includes(`href="/${id}/"`), `expected /${id}/ on hub page ${index + 1}`);
    }
    assert.doesNotMatch(html, /href="\/guide\/page\/4\//);
  }

  const redirects = await readFile(new URL('../dist/_redirects', import.meta.url), 'utf8');
  assert.match(redirects, /^\/guide\/page\/4\/ \/guide\/ 301$/m);
  await assert.rejects(readFile(new URL('../dist/guide/page/4/index.html', import.meta.url), 'utf8'), { code: 'ENOENT' });
});

test('guide pages use explicit order for entries sharing an update date', async () => {
  const index = await readFile(new URL('../src/pages/guide/index.astro', import.meta.url), 'utf8');
  const paged = await readFile(new URL('../src/pages/guide/page/[page].astro', import.meta.url), 'utf8');

  for (const source of [index, paged]) {
    assert.match(source, /b\.data\.updatedAt\.localeCompare\(a\.data\.updatedAt\)/);
    assert.match(source, /\(a\.data\.order \?\? 100\) - \(b\.data\.order \?\? 100\)/);
  }
});
