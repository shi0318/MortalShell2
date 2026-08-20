import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const root = new URL('../src/', import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('homepage promotes the Mortal Shell II PC search page and launch guides', async () => {
  const html = await source('pages/index.astro');

  assert.match(html, /Available now/);
  assert.match(html, /href: '\/pc-requirements\/'/);
  assert.match(html, /href: '\/mortal-shell-2-beginner-combat-tips\/'/);
  assert.match(html, /href: '\/mortal-shell-2-steam-reviews\/'/);
  assert.match(html, /href: '\/mortal-shell-2-missable-achievements\/'/);
  assert.doesNotMatch(html, /Mortal Shell 2 launches August 20, 2026/);
});

test('guide hub uses launch wording while retaining Beta articles as historical content', async () => {
  const html = await source('pages/guide/index.astro');

  assert.match(html, /Mortal Shell 2 Guides — PC, Combat, Shells, Weapons & Bosses/);
  assert.match(html, /Launch guides, PC requirements, combat, Shells, weapons, bosses, map, and Steam reports/);
  assert.doesNotMatch(html, /Pre-release pages only/);
});

test('PC requirements page targets Mortal Shell II PC intent with an image', async () => {
  const markdown = await source('content/guides/pc-requirements.md');

  assert.match(markdown, /title: "Mortal Shell II PC Requirements/);
  assert.match(markdown, /heading: "Mortal Shell II PC Requirements"/);
  assert.match(markdown, /Mortal Shell II is now available on PC through Steam/);
  assert.match(markdown, /<img src="\/images\/mortalshell2-shell-greatsword-closeup\.webp"/);
});

test('category hubs do not describe the full-game sections as pre-release trackers', async () => {
  const files = ['tools/index.astro', 'weapons/index.astro', 'bosses/index.astro', 'shells/index.astro'];
  const pages = await Promise.all(files.map((file) => source(`pages/${file}`)));
  const combined = pages.join('\n');

  assert.doesNotMatch(combined, /pre-release arsenal tracker/i);
  assert.doesNotMatch(combined, /pre-release Mortal Shell II boss tracker/i);
  assert.doesNotMatch(combined, /This page is a <strong>pre-release tracker<\/strong>/i);
});

test('Open Beta pages are historical and point PC players to the retail requirements', async () => {
  const [download, openBeta, pcSettings, launchChecklist] = await Promise.all([
    source('content/guides/download.md'),
    source('content/guides/open-beta.md'),
    source('content/guides/pc-settings.md'),
    source('content/guides/launch-day-checklist.md'),
  ]);

  assert.match(download, /Open Beta.*Archive/i);
  assert.match(openBeta, /Open Beta.*Archive/i);
  assert.match(pcSettings, /Open Beta PC Settings.*Archived/i);
  assert.match(pcSettings, /\[Mortal Shell II PC Requirements\]\(\/pc-requirements\/\)/);
  assert.match(launchChecklist, /Mortal Shell II launched on August 20, 2026/);
});

test('SEO hubs target distinct Mortal Shell 2 search intents', async () => {
  const [home, guide, weapons, bosses, shells, beginner] = await Promise.all([
    source('pages/index.astro'),
    source('pages/guide/index.astro'),
    source('pages/weapons/index.astro'),
    source('pages/bosses/index.astro'),
    source('pages/shells/index.astro'),
    source('content/guides/beginner-guide.md'),
  ]);

  assert.match(home, /Mortal Shell 2 Wiki: Weapons, Shells, Bosses & Beginner's Guide/);
  assert.match(guide, /Mortal Shell 2 Guides — PC, Combat, Shells, Weapons & Bosses/);
  assert.match(weapons, /Mortal Shell 2 Weapons — Weapon Types, Upgrade Evidence & Guide/);
  assert.match(weapons, /Mortal Shell 2 Weapons Guide/);
  assert.match(bosses, /Mortal Shell 2 Bosses — Boss Tracker & Verified Strategies/);
  assert.match(bosses, /Mortal Shell 2 Bosses Guide/);
  assert.match(shells, /Mortal Shell 2 Shells — Roster, Abilities & Build Evidence/);
  assert.match(shells, /Mortal Shell 2 Shells Guide/);
  assert.match(beginner, /title: "Mortal Shell 2 Beginner Guide — Open Beta First Hours & Launch Tips"/);
  assert.match(beginner, /heading: "Mortal Shell 2 Beginner Guide: First Hours"/);
  assert.match(beginner, /updatedAt: "2026-08-20"/);
});

test('homepage has contextual links into the main Mortal Shell 2 guide cluster', async () => {
  const home = await source('pages/index.astro');

  assert.match(home, /Mortal Shell 2 weapons guide/);
  assert.match(home, /Mortal Shell 2 Shells guide/);
  assert.match(home, /Mortal Shell 2 Bosses guide/);
  assert.match(home, /Mortal Shell 2 beginner guide/);
});

test('homepage includes the local gameplay video without a visible Steam source note', async () => {
  const home = await source('pages/index.astro');

  assert.match(home, /Mortal Shell II Gameplay Video/);
  assert.match(home, /src="\/videos\/mortal-shell-2-gameplay\.webm"/);
  assert.match(home, /preload="none"/);
  assert.doesNotMatch(home, /Steam source|Source: Steam/i);
});
