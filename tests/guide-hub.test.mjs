import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('guide hub promotes the launch-day guides first', async () => {
  const html = await readFile(new URL('../dist/guide/index.html', import.meta.url), 'utf8');
  const start = html.indexOf('latest-guides');
  const end = start < 0 ? -1 : html.indexOf('</section>', start);
  const latest = start < 0 ? '' : html.slice(start, end < 0 ? html.length : end);

  assert.ok(latest, 'expected a latest guides section');
  assert.ok(latest.includes('href="/mortal-shell-2-beginner-combat-tips/"'));
  assert.ok(latest.includes('href="/mortal-shell-2-missable-achievements/"'));
  assert.ok(latest.includes('href="/mortal-shell-2-steam-reviews/"'));
});

test('guide pages use explicit order for entries sharing a verified date', async () => {
  const index = await readFile(new URL('../src/pages/guide/index.astro', import.meta.url), 'utf8');
  const paged = await readFile(new URL('../src/pages/guide/page/[page].astro', import.meta.url), 'utf8');

  for (const source of [index, paged]) {
    assert.match(source, /b\.data\.updatedAt\.localeCompare\(a\.data\.updatedAt\)/);
    assert.match(source, /\(a\.data\.order \?\? 100\) - \(b\.data\.order \?\? 100\)/);
  }
});
