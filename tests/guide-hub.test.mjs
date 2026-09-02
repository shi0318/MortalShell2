import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';

const GUIDES_DIR = new URL('../src/content/guides/', import.meta.url);
const PAGE_SIZE = 9;

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

  assert.ok(entries.length > PAGE_SIZE, 'expected more guides than one hub page');

  return entries
    .sort(
      (a, b) =>
        b.updatedAt.localeCompare(a.updatedAt) ||
        a.order - b.order ||
        a.id.localeCompare(b.id),
    )
    .map((entry) => entry.id);
}

test('guide hub promotes the most recently verified retail guides first', async () => {
  const html = await readFile(new URL('../dist/guide/index.html', import.meta.url), 'utf8');
  const start = html.indexOf('latest-guides');
  const end = start < 0 ? -1 : html.indexOf('</section>', start);
  const latest = start < 0 ? '' : html.slice(start, end < 0 ? html.length : end);

  assert.ok(latest, 'expected a latest guides section');

  const ordered = await orderedGuideIds();

  for (const id of ordered.slice(0, PAGE_SIZE)) {
    assert.ok(latest.includes(`href="/${id}/"`), `expected /${id}/ on hub page 1`);
  }

  const overflow = ordered[PAGE_SIZE];
  assert.ok(
    !latest.includes(`href="/${overflow}/"`),
    `expected /${overflow}/ to be pushed to page 2`,
  );
});

test('guide pages use explicit order for entries sharing a verified date', async () => {
  const index = await readFile(new URL('../src/pages/guide/index.astro', import.meta.url), 'utf8');
  const paged = await readFile(new URL('../src/pages/guide/page/[page].astro', import.meta.url), 'utf8');

  for (const source of [index, paged]) {
    assert.match(source, /b\.data\.updatedAt\.localeCompare\(a\.data\.updatedAt\)/);
    assert.match(source, /\(a\.data\.order \?\? 100\) - \(b\.data\.order \?\? 100\)/);
  }
});
