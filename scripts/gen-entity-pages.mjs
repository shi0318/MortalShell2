// 实体页生成器：从 src/data/{bosses,weapons,shells}.ts 的真实记录生成
// /bosses/<slug>/、/weapons/<slug>/、/shells/<slug>/ 内容页。
// 数据逐字来自官方 patch notes / Valve 成就列表 / 社区报告，不补猜。
// 用法：node scripts/gen-entity-pages.mjs
import { build } from 'esbuild';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const TODAY = '2026-09-15';

// 1. 把 TS 数据文件打包成可 import 的 ESM
const tmp = join(ROOT, '.tmp-data-bundle.mjs');
await build({
  entryPoints: [
    join(ROOT, 'src/data/bosses.ts'),
    join(ROOT, 'src/data/weapons.ts'),
    join(ROOT, 'src/data/shells.ts'),
    join(ROOT, 'src/data/images.ts'),
  ],
  bundle: true,
  format: 'esm',
  splitting: true,
  outdir: join(ROOT, '.tmp-bundle'),
  logLevel: 'silent',
});
const bosses = await import(pathToFileURL(join(ROOT, '.tmp-bundle/bosses.js')).href);
const weapons = await import(pathToFileURL(join(ROOT, '.tmp-bundle/weapons.js')).href);
const shells = await import(pathToFileURL(join(ROOT, '.tmp-bundle/shells.js')).href);
const images = await import(pathToFileURL(join(ROOT, '.tmp-bundle/images.js')).href);
rmSync(join(ROOT, '.tmp-bundle'), { recursive: true, force: true });
rmSync(tmp, { force: true });

const IMG = images.SITE_IMAGES;

// 描述必须 50-170 字符（schema 约束）
function desc(text, min = 52, max = 168) {
  let s = text.trim();
  if (s.length > max) {
    s = s.slice(0, max);
    s = s.slice(0, s.lastIndexOf(' ')) + '…';
  }
  if (s.length < min) s = s + ' — confirmed facts and what is still not published.';
  return s;
}

const esc = (s) => s.replace(/"/g, "'");
const bullet = (arr) => arr.map((i) => `- ${i}`).join('\n');
const table = (rows) =>
  ['| Detail | Value |', '|---|---|', ...rows.map(([k, v]) => `| ${k} | ${v} |`)].join('\n');

function fm({ title, heading, description, category, keyword, cover, order }) {
  return `---
title: "${esc(title)}"
heading: "${esc(heading)}"
description: "${esc(description)}"
category: ${category}
keyword: "${esc(keyword)}"
cover: ${cover}
status: official
preRelease: false
order: ${order}
updatedAt: "${TODAY}"
---
`;
}

// ---------- Boss 页 ----------
const bossImages = [
  IMG.cathedralBoss, IMG.bossesCart, IMG.bossesSpider, IMG.gloomCreature,
  IMG.bearShaman, IMG.mapSwamp, IMG.heroCombat, IMG.mapSwamp,
];
const SKIP_BOSSES = new Set(['magdalena-lady-of-the-woods', 'open-beta-mini-bosses']);

const bossPages = bosses.BOSSES.filter((b) => !SKIP_BOSSES.has(b.slug));
bossPages.forEach((b, i) => {
  const img = bossImages[i % bossImages.length];
  const body = `## Short answer

**${b.name}** is a named boss encounter in the Mortal Shell II retail game. ${b.summary}

![${esc(img.alt)}](${img.src})

## What the official record confirms

${bullet(b.knownInfo)}

## Location

${b.location}

## What is not published

No phase chart, parry window, or drop table for this boss has ever been published by Cold Symmetry. Any guide that shows exact timings or rewards for ${b.name} is describing player observation, not developer data — this page only states what the official patches and achievement record support.

## Related pages

- [All Mortal Shell 2 bosses](/bosses/)
- [Boss preparation guide](/mortal-shell-2-boss-preparation-guide/)
- [Boss difficulty breakdown](/mortal-shell-2-boss-difficulty/)
- [Boss runback routes](/mortal-shell-2-boss-runback/)
`;
  const file = join(ROOT, 'src/content/guides/bosses', `${b.slug}.md`);
  mkdirSync(join(ROOT, 'src/content/guides/bosses'), { recursive: true });
  writeFileSync(
    file,
    fm({
      title: `Mortal Shell 2 ${b.name} — Boss Guide`,
      heading: `Mortal Shell 2 ${b.name}`,
      description: desc(`${b.name} in Mortal Shell 2: ${b.summary}`),
      category: 'bosses',
      keyword: `mortal shell 2 ${b.name.toLowerCase()}`,
      cover: img.src,
      order: 30 + i,
    }) + '\n' + body
  );
});

// ---------- 武器页 ----------
const weaponImages = [
  IMG.weaponsCloseup, IMG.heroBanner, IMG.bearShaman, IMG.mapVillage,
  IMG.mapVillage, IMG.heroCombat, IMG.cathedralBoss, IMG.bossesCart,
  IMG.bossesSpider, IMG.mapSwamp, IMG.gloomCreature, IMG.worldMapOverview,
  IMG.shellsPortrait, IMG.mapSwamp, IMG.worldMapCover,
];

const weaponPages = [...weapons.WEAPONS];
// Troubador's Lute / Weltcap：有官方补丁数值但无解锁成就，也建页
const extraWeapons = weapons.WEAPONS_WITHOUT_ACHIEVEMENTS.filter((w) =>
  ["Troubador's Lute", 'Weltcap'].includes(w.name)
);

weaponPages.forEach((w, i) => {
  const img = weaponImages[i % weaponImages.length];
  const stats =
    w.knownStats && w.knownStats.length ? bullet(w.knownStats) : '- No damage values, moveset, or scaling published.';
  const rows = [
    ['Unlock achievement', w.unlockAchievement ?? '— (no unlock achievement exists)'],
    ['Global unlock rate', typeof w.unlockRate === 'number' ? `${w.unlockRate}%` : '—'],
    ['Weapon / Sidearm split', 'Not published'],
    ['Acquisition', w.acquisition],
  ];
  const body = `## Short answer

**${w.name}** ${w.unlockAchievement ? `is one of the thirteen Mortal Shell 2 weapons confirmed by a Valve "Unlock" achievement — ${w.unlockAchievement}, unlocked by ${w.unlockRate}% of players. ` : 'is confirmed to exist in Mortal Shell 2 by Cold Symmetry\u2019s own patch notes. '} ${w.summary}

![${esc(img.alt)}](${img.src})

## Confirmed facts

${table(rows)}

## What the patches changed

${stats}

## Reading the unlock rate

Valve publishes the global achievement rate, which is the only population data available for ${w.name}. ${
    typeof w.unlockRate === 'number' && w.unlockRate >= 55
      ? `At ${w.unlockRate}%, most players have it — consistent with an early or hard-to-miss pickup.`
      : typeof w.unlockRate === 'number' && w.unlockRate <= 40
        ? `At ${w.unlockRate}%, it is one of the rarer unlocks on the list — consistent with a late, optional, or well-hidden acquisition.`
        : typeof w.unlockRate === 'number'
          ? `At ${w.unlockRate}%, it sits mid-pack: a meaningful number of players finish without it.`
          : 'There is no achievement, so no unlock rate exists to reason from.'
  }

## Related pages

- [All Mortal Shell 2 weapons](/weapons/)
- [Best weapon guide](/mortal-shell-2-best-weapon/)
- [Weapon upgrade guide (Tarforge)](/mortal-shell-2-weapon-upgrade-guide/)
- [Fragments and weapon skills](/mortal-shell-2-fragments-weapon-skills/)
`;
  const slug = w.slug ?? w.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  mkdirSync(join(ROOT, 'src/content/guides/weapons'), { recursive: true });
  writeFileSync(
    join(ROOT, 'src/content/guides/weapons', `${slug}.md`),
    fm({
      title: `Mortal Shell 2 ${w.name} — Stats, Unlock & Patch History`,
      heading: `Mortal Shell 2 ${w.name}`,
      description: desc(`${w.name} in Mortal Shell 2: ${w.summary}`),
      category: 'weapons',
      keyword: `mortal shell 2 ${w.name.toLowerCase()}`,
      cover: img.src,
      order: 30 + i,
    }) + '\n' + body
  );
});
// 额外两把（无成就）
extraWeapons.forEach((w, i) => {
  const img = weaponImages[(13 + i) % weaponImages.length];
  const slug = w.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const body = `## Short answer

**${w.name}** exists in Mortal Shell 2 — ${w.note}

![${esc(img.alt)}](${img.src})

## Confirmed facts

${table([
    ['Unlock achievement', '— (no unlock achievement exists)'],
    ['Weapon / Sidearm split', 'Not published'],
  ])}

## What is not published

No damage values, scaling, moveset, or acquisition route has been published for ${w.name}. The only first-party evidence is the patch-note mentions recorded above.

## Related pages

- [All Mortal Shell 2 weapons](/weapons/)
- [Best weapon guide](/mortal-shell-2-best-weapon/)
- [Weapon upgrade guide (Tarforge)](/mortal-shell-2-weapon-upgrade-guide/)
`;
  mkdirSync(join(ROOT, 'src/content/guides/weapons'), { recursive: true });
  writeFileSync(
    join(ROOT, 'src/content/guides/weapons', `${slug}.md`),
    fm({
      title: `Mortal Shell 2 ${w.name} — What Is Confirmed`,
      heading: `Mortal Shell 2 ${w.name}`,
      description: desc(`${w.name} in Mortal Shell 2: ${w.note}`),
      category: 'weapons',
      keyword: `mortal shell 2 ${w.name.toLowerCase()}`,
      cover: img.src,
      order: 60 + i,
    }) + '\n' + body
  );
});

// ---------- Shell 页 ----------
const shellImages = [
  IMG.shellsPortrait, IMG.heroBanner, IMG.bearShaman, IMG.bossesSpider,
  IMG.mapVillage, IMG.heroCombat, IMG.cathedralBoss, IMG.mapSwamp,
];
const shellPages = shells.SHELLS.filter((s) => !s.hasDetailPage);
shellPages.forEach((s, i) => {
  const img = shellImages[i % shellImages.length];
  const body = `## Short answer

**${s.name}** is one of the eight playable Shells in Mortal Shell 2. ${s.summary}

![${esc(img.alt)}](${img.src})

## How we know it is a Shell

${s.shellConfirmedBy}

## Confirmed facts

${table([
    ['Unlock achievement', s.unlockAchievement ?? '—'],
    ['Global unlock rate', typeof s.unlockRate === 'number' ? `${s.unlockRate}%` : '—'],
    ['Acquisition', s.acquisition],
  ])}

## Abilities on the record

${bullet(s.knownAbilities)}

## What is not published

No stat sheet, Resilience value, or ability cooldown for ${s.name} has been published by Cold Symmetry. Numbers appearing in community videos are player measurement, not developer data.

## Related pages

- [All Shells](/shells/)
- [Shell selection guide](/shell-selection-guide/)
- [Shell abilities guide](/mortal-shell-2-shell-abilities-guide/)
- [Post-launch shell comparison](/mortal-shell-2-shell-comparison-post-launch/)
`;
  mkdirSync(join(ROOT, 'src/content/guides/shells'), { recursive: true });
  writeFileSync(
    join(ROOT, 'src/content/guides/shells', `${s.slug}.md`),
    fm({
      title: `Mortal Shell 2 ${s.name} — Shell Guide`,
      heading: `Mortal Shell 2 ${s.name}`,
      description: desc(`${s.name} in Mortal Shell 2: ${s.summary}`),
      category: 'shells',
      keyword: `mortal shell 2 ${s.name.split(',')[0].toLowerCase()}`,
      cover: img.src,
      order: 40 + i,
    }) + '\n' + body
  );
});

console.log(
  `generated: ${bossPages.length} boss pages, ${weaponPages.length + extraWeapons.length} weapon pages, ${shellPages.length} shell pages`
);
