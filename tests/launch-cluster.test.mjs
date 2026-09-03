import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';

const guideRoot = new URL('../src/content/guides/', import.meta.url);
const publicRoot = new URL('../public/', import.meta.url);

const slugs = [
  'mortal-shell-2-difficulty-options',
  'mortal-shell-2-executions-heal',
  'mortal-shell-2-turn-off-the-sun',
  'mortal-shell-2-leveling-system',
  'mortal-shell-2-reset-shell-abilities',
  'mortal-shell-2-fragments-weapon-skills',
  'mortal-shell-2-weapon-upgrade-guide',
  'mortal-shell-2-melee-ranged-weapons',
  'mortal-shell-2-dungeons-open-world',
  'mortal-shell-2-how-many-dungeons',
  'mortal-shell-2-open-world-size',
  'mortal-shell-2-sidearms-and-ranged-combat',
  'mortal-shell-2-boss-difficulty',
  'mortal-shell-2-boss-runback',
  'mortal-shell-2-respawn-points',
  'mortal-shell-2-blurry-graphics-fix',
  'mortal-shell-2-reflex-stutter-fix',
  'mortal-shell-2-frame-generation-fix',
  'mortal-shell-2-engine-ini-settings',
  'mortal-shell-2-launch-bugs',
];

// Read a top-level frontmatter scalar. Quotes are stripped after capturing, so a
// value containing an apostrophe (Mether's Severance) still parses.
function frontmatterValue(markdown, key) {
  const raw = markdown.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'))?.[1]?.trim() ?? '';
  return raw.replace(/^(["'])([\s\S]*)\1$/, '$2');
}

test('Mortal Shell 2 launch cluster contains exactly 20 source-tracked visual pages', async () => {
  assert.equal(slugs.length, 20);

  for (const slug of slugs) {
    const markdown = await readFile(new URL(`${slug}.md`, guideRoot), 'utf8');
    const title = frontmatterValue(markdown, 'title');
    const heading = frontmatterValue(markdown, 'heading');
    const description = frontmatterValue(markdown, 'description');
    const cover = frontmatterValue(markdown, 'cover');

    assert.match(title, /Mortal Shell (2|II)/, `${slug} title must contain the game name`);
    assert.match(heading, /Mortal Shell (2|II)/, `${slug} H1 must contain the game name`);
    assert.ok(description.length >= 50 && description.length <= 170, `${slug} description length`);
    // The cluster was verified together on 2026-08-20. A page may carry a later date
    // once newer first-party information lands on it, but never an earlier one.
    assert.ok(frontmatterValue(markdown, 'updatedAt') >= '2026-08-20', `${slug} last verified date`);
    assert.match(cover, /^\/images\/[\w-]+\.(webp|jpg|png)$/i, `${slug} cover path`);
    await access(new URL(cover.slice(1), publicRoot));

    assert.match(markdown, /sourceUrl:\s*["']https?:\/\//, `${slug} source URL`);
    assert.match(markdown, /lastChecked:\s*["']2026-08-20["']/, `${slug} source check date`);
    assert.match(markdown, /<figure>[\s\S]*<img[^>]+src="\/images\//, `${slug} body figure`);
    assert.match(markdown, /Mortal Shell (2|II)/, `${slug} body game name`);
  }
});
