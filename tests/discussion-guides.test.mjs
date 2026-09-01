import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';

const guideRoot = new URL('../src/content/guides/', import.meta.url);
const publicRoot = new URL('../public/', import.meta.url);

const slugs = [
  { slug: 'mortal-shell-2-balance-patch-1', updatedAt: '2026-09-01' }, // corrected with Week 1 facts
  { slug: 'mortal-shell-2-beta-save-missing', updatedAt: '2026-08-21' },
  { slug: 'mortal-shell-2-language-support', updatedAt: '2026-08-21' },
  { slug: 'mortal-shell-2-great-martyrs-blade-patch', updatedAt: '2026-09-01' }, // corrected with Week 1 facts
];

function frontmatterValue(markdown, key) {
  const match = markdown.match(new RegExp(`^${key}:\\s*(?:"([^"]+)"|'([^']+)'|([^\\r\\n]+))\\s*$`, 'm'));
  return match?.[1] ?? match?.[2] ?? match?.[3]?.trim() ?? '';
}

test('Mortal Shell II discussion guides are source-tracked visual pages', async () => {
  assert.equal(slugs.length, 4);

  for (const { slug, updatedAt } of slugs) {
    const markdown = await readFile(new URL(`${slug}.md`, guideRoot), 'utf8');
    const title = frontmatterValue(markdown, 'title');
    const heading = frontmatterValue(markdown, 'heading');
    const description = frontmatterValue(markdown, 'description');
    const cover = frontmatterValue(markdown, 'cover');
    const status = frontmatterValue(markdown, 'status');

    assert.match(title, /Mortal Shell (2|II)/, `${slug} title must contain the game name`);
    assert.match(heading, /Mortal Shell (2|II)/, `${slug} H1 must contain the game name`);
    assert.match(description, /Mortal Shell (2|II)/, `${slug} description must contain the game name`);
    assert.ok(description.length >= 50 && description.length <= 170, `${slug} description length`);
    assert.equal(frontmatterValue(markdown, 'updatedAt'), updatedAt, `${slug} update date`);
    assert.equal(frontmatterValue(markdown, 'preRelease'), 'false', `${slug} must be post-launch`);
    assert.ok(['official', 'community'].includes(status), `${slug} must be indexable`);
    assert.match(cover, /^\/images\/[\w-]+\.(webp|jpg|png)$/i, `${slug} cover path`);
    await access(new URL(cover.slice(1), publicRoot));

    assert.match(markdown, /sourceUrl:\s*["']https?:\/\//, `${slug} source URL`);
    assert.match(markdown, /lastChecked:\s*["']2026-08-21["']/, `${slug} source check date`);
    assert.match(markdown, /<figure>[\s\S]*<img[^>]+src="\/images\//, `${slug} body figure`);
    assert.match(markdown, /Mortal Shell (2|II)/, `${slug} body game name`);
    assert.match(markdown, /\]\(\/[a-z0-9-]+\//, `${slug} must link to an internal guide`);
  }
});

test('discussion guides preserve the verified launch facts', async () => {
  const balance = await readFile(new URL('mortal-shell-2-balance-patch-1.md', guideRoot), 'utf8');
  const save = await readFile(new URL('mortal-shell-2-beta-save-missing.md', guideRoot), 'utf8');
  const language = await readFile(new URL('mortal-shell-2-language-support.md', guideRoot), 'utf8');
  const blade = await readFile(new URL('mortal-shell-2-great-martyrs-blade-patch.md', guideRoot), 'utf8');

  assert.match(balance, /Great Martyr.?s Blade Attack Damage \+20%/i);
  assert.match(balance, /Smelting a weapon at the Tarforge costs 75% less gloom/i);
  assert.match(save, /does not transfer|reset at launch/i);
  assert.match(language, /Simplified Chinese/i);
  assert.match(language, /full audio/i);
  assert.match(blade, /\+20%/);
});
