// Boss 数据：正式版已发售。15 个 Boss 的名字与攻击描述来自官方 Week 1 Update patch notes
// （gid 690892955941077484，2026-08-29），这是第一方 Boss 名单来源，比社区指南高一级。
// Valve 把所有 Boss 成就都隐藏了，所以零售版 Boss 名单在 patch notes 出现之前是不可见的 ——
// 这就是本页长期为空的原因，不是没找，而是官方之前没公布过名单。
// patch notes 给的是 bug 修复与平衡调整，不是完整攻略：招式名可以引用，阶段表和 parry 时机不补猜。
import type { SourceRef } from './sources';

const WEEK1_PATCH: SourceRef = {
  status: 'official',
  sourceUrl: 'https://store.steampowered.com/news/app/2584270/view/690892955941077484',
  sourceDate: '2026-08-29',
  gameVersion: 'Week 1 Update',
  lastChecked: '2026-09-01',
  note: 'Cold Symmetry\'s Week 1 Update patch notes list this boss by name under the "Bosses and Minibosses" heading and describe specific attack changes. That is first-party confirmation of the name and of the named attacks. The notes describe fixes and balance, not phase charts, parry windows, or drop tables.',
};

const BALANCE_PATCH_1: SourceRef = {
  status: 'official',
  sourceUrl: 'https://steamcommunity.com/app/2584270/discussions/0/600780565993539360/',
  sourceDate: '2026-08-20',
  gameVersion: 'Balance Patch 1',
  lastChecked: '2026-09-01',
  note: 'Balance Patch 1 (smithbodie [DEVELOPER], 20 August 2026) publishes exact base-damage and maximum-health reductions for this boss.',
};

const OPEN_BETA: SourceRef = {
  status: 'official',
  sourceUrl: 'https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/',
  sourceDate: '2026-06-05',
  gameVersion: 'Open Beta store listing',
  lastChecked: '2026-07-24',
  note: 'Mentioned on the Open Beta store page. Open Beta evidence is historical; retail encounter details need current-build verification.',
};

export interface Boss {
  slug: string;
  name: string;
  summary: string;
  // 已知信息：只写 patch notes 明确描述的招式与改动
  knownInfo: string[];
  // 出现区域（若已知）
  location: string;
  source: SourceRef;
  hasDetailPage: boolean;
  detailHref?: string;
}

// 按官方 Week 1 修复列表的顺序排列。
export const BOSSES: Boss[] = [
  {
    slug: 'the-monolith',
    name: 'The Monolith',
    summary:
      'Received the heaviest official rework of any boss: Balance Patch 1 cut its damage and health, and the Week 1 Update retimed its two signature attacks and confirmed the attack spam was a bug.',
    knownInfo: [
      'Has a laser attack and a spin attack, both given "more consistent, readable timings" in the Week 1 Update.',
      'The repeated attack spam players complained about was officially a bug, now fixed — so pre-29-August difficulty reports describe behaviour that no longer exists.',
      'Balance Patch 1: base damage −19%, maximum health −10%.',
      'Some hitboxes were bad and were adjusted; a bug causing double damage on certain hits was fixed.',
      'No phase chart, parry window, or drop table published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'zmey',
    name: 'Zmey',
    summary:
      'The final boss, and the only one the developer confirms keeps a one-shot mechanic on purpose: its tail grab still takes you from full health to zero in Night Mode by design.',
    knownInfo: [
      'Has a Tail grab which, before the Week 1 Update, took both the Shell and the Harbinger "from 100-0" simultaneously. That is fixed for normal play.',
      'In Night Mode the full-health tail grab kill is intentional — the notes say "In night mode it\'s ON, though."',
      'Has an attack called Ring Waves, which now aligns to the ground properly.',
      'Has elemental stomps, which were given new effects.',
      'Players report beating it with a +16 weapon, so the fight does not require an uncapped forge.',
    ],
    location: 'Final boss. Precise location not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'the-lost-child',
    name: 'The Lost Child',
    summary:
      'Shipped with a placeholder walk animation, which the Week 1 Update replaced. Both post-launch patches touched it, making it the most-adjusted early boss.',
    knownInfo: [
      'Has a bite attack whose anticipation was retimed in the Week 1 Update.',
      'Balance Patch 1: base damage −10%, maximum health −15%.',
      'Before Week 1 it could launch you or itself across the arena — a bug, now fixed.',
      'It shipped using a placeholder walk animation; the finished animation was added in Week 1.',
      'Riposte wobble and an endless blood effect were fixed.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'droeg-the-conquerer',
    name: 'Droeg, the Conquerer',
    summary:
      'Spelled "Conquerer" in the official notes. Its arena had navigation problems at launch, and the approach to it had a stuck spot in the snow.',
    knownInfo: [
      'Arena navigation was repaired in the Week 1 Update, so enemies and the boss move correctly.',
      'Riposte alignment and hit reactions were corrected.',
      'Fire and snowfall effects received a pass, and the arena effects were optimised for performance.',
      'A stuck spot in the snow on the approach to the arena was fixed.',
      'No moveset, phase, or reward detail published.',
    ],
    location: 'Reached through a snow approach (implied by the fixed stuck spot). Not stated directly.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'sir-isaac-the-scholar-prince',
    name: 'Sir Isaac, the Scholar-Prince',
    summary:
      'Confirmed to have at least two phases, because the Week 1 Update fixes a second-phase attack and a phase-transition riposte.',
    knownInfo: [
      'Has at least two phases — the notes reference "a second-phase attack" and a "phase-transition riposte".',
      'A stray lunge was removed from one second-phase attack.',
      'The phase-transition riposte was fixed for the case where you have your back to a wall.',
      'Arena navigation was repaired.',
      'Phase triggers, health thresholds, and moveset are not published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'hexapod',
    name: 'Hexapod',
    summary:
      'The only boss the Week 1 Update made harder: its area attack "deals considerably more splash damage" than at launch.',
    knownInfo: [
      'Has an area attack that now deals considerably more splash damage — an intentional buff, not a fix.',
      'Has a shooting attack, which it could previously interrupt itself out of.',
      'Has a dive attack, which could wedge it into the environment.',
      'One attack was retimed to be fairer.',
      'Its arena was made smaller, and the arena beacon is now lit by default.',
    ],
    location: 'Has a dedicated arena with a beacon. Location not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'the-warden',
    name: 'The Warden',
    summary:
      'Reworked alongside Urrig in the Week 1 Update, with retuned attacks and new ice attacks added to both.',
    knownInfo: [
      'Was reworked in the Week 1 Update with retuned attacks.',
      'Gained new ice attacks, so anything written before 29 August describes an incomplete moveset.',
      'Paired with Urrig, the Executioner in the patch notes, suggesting a shared encounter type or region.',
      'No phase, parry, or reward detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'urrig-the-executioner',
    name: 'Urrig, the Executioner',
    summary:
      'Has the one attack the developer explicitly states cannot be parried — and as of Week 1 the game warns you before it happens.',
    knownInfo: [
      'Has a spin attack that cannot be parried. The Week 1 Update added a warning telegraph for it rather than making it parryable.',
      'This is the only unparryable attack named anywhere in the official notes.',
      'Was reworked with retuned attacks and gained new ice attacks.',
      'No player thread in the harvested corpus discusses this boss — it is named only in the official notes.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'orrem-the-reclaimed',
    name: 'Orrem, the Reclaimed',
    summary:
      'Displayed the wrong name in game until the Week 1 Update, so early guides and videos may refer to it by a different name entirely.',
    knownInfo: [
      'Was displaying the wrong name in game before the Week 1 Update. Footage or guides from the first nine days may label it incorrectly.',
      'Attack and riposte alignment were improved.',
      'No moveset, phase, or location detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'malborn-offspring',
    name: 'Malborn Offspring',
    summary:
      'Throws its sword and picks it back up. It also carries the one boss bug Cold Symmetry still lists as a known issue.',
    knownInfo: [
      'Has a sword throw attack, and retrieves the sword afterwards. Before Week 1 it could interrupt its own throw and fail to pick the sword back up.',
      'OFFICIAL KNOWN ISSUE, still open: "Possible Malborn Offspring bug when using Grisha Remnant Summon during boss fight." Avoid that summon in this fight until it is fixed.',
      'No phase or reward detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'vrannic-the-grand-illusionist',
    name: 'Vrannic, the Grand Illusionist',
    summary:
      'Uses projectiles, which received new visual trails in the Week 1 Update — a readability change rather than a balance one.',
    knownInfo: [
      'Uses projectile attacks, which now have new VFX trails to make them easier to read.',
      'That is the only change the official notes make to this boss.',
      'No moveset, phase, or location detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'magdalena-lady-of-the-woods',
    name: 'Magdalena, the Lady of the Woods',
    summary:
      'An optional Corrupted Gate boss in the retail build, not the main-path destination the Open Beta marketing implied. Its achievement is the most-unlocked of the gate bosses.',
    knownInfo: [
      'Has a charge attack, confirmed by the Week 1 fix "no longer rotates incorrectly during her charge".',
      'Optional Corrupted Gate boss. Its achievement "Wheelie Good Time" sits at 60.2% — the highest of the gate bosses.',
      'The Caerinid Spider in her area does not respawn once defeated, and was the one enemy excluded from the Beta HP restoration.',
      'Officially named on the Open Beta store page as an early objective; the retail role is optional.',
      'The official notes spell the area owner "Magdelena" in Balance Patch 1 and "Magdalena" in the Week 1 Update.',
    ],
    location: 'Corrupted Gate near the Mushroom Village Gate Beacon, upper eastern side of the map (community-reported).',
    source: WEEK1_PATCH,
    hasDetailPage: true,
    detailHref: '/magdalena/',
  },
  {
    slug: 'bloodcursed-lithopod',
    name: 'Bloodcursed Lithopod',
    summary:
      'Had the most physical-collision problems of any boss at launch: it could clip into other enemies and nudge a standing player into the air.',
    knownInfo: [
      'Has jump attacks, whose damage and turning were retuned in the Week 1 Update.',
      'Before Week 1 it glitched when colliding with other enemies, so its arena can contain additional enemies.',
      'It could nudge a standing player into the air — fixed.',
      'No phase or reward detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'tainted-vestige',
    name: 'Tainted Vestige',
    summary:
      'A ranged attacker whose shots were missing without reason before the Week 1 Update, meaning it was accidentally easier at launch than intended.',
    knownInfo: [
      'Uses ranged attacks, which "no longer miss without reason" as of the Week 1 Update.',
      'That fix makes it more dangerous than it was at launch, not less.',
      'No moveset, phase, or location detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'the-wandering-shepherd',
    name: 'The Wandering Shepherd',
    summary:
      'Teleports within its arena and is accompanied by Sheep. Both behaviours were broken at launch and fixed in Week 1.',
    knownInfo: [
      'Teleports within its arena, and now does so sensibly rather than erratically.',
      'Is accompanied by Sheep, which now respawn properly in New Game Plus.',
      'No phase, parry, or reward detail published.',
    ],
    location: 'Has a dedicated arena. Location not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'vellen-high-lord-of-mammon',
    name: 'Vellen, High Lord of Mammon',
    summary:
      'Named only in the Week 1 softlock fixes: players could lure it out of its arena, which the patch closed. That confirms it as an arena boss in Mammon.',
    knownInfo: [
      'Confirmed as an arena boss — the Week 1 Update fixed "being able to lure Vellen, High Lord of Mammon out of his arena".',
      'The title places it in Mammon, the region whose enemies drop double gold since Balance Patch 1.',
      'Named in the softlock section rather than the boss section, so no attack description is published.',
      'No moveset, phase, or reward detail published.',
    ],
    location: 'Mammon (implied by the title).',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'larreth-the-brigand-king',
    name: 'Larreth, the Brigand King',
    summary:
      'Named only in a Week 1 cosmetic fix: it "now appears without his helmet". Enough to confirm the name, not enough for a strategy page.',
    knownInfo: [
      'Confirmed by name in the Week 1 Update, which fixed it appearing with a helmet it should not have.',
      'That is a visual fix, so nothing about its moveset or difficulty is published.',
      'No location, phase, or reward detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'the-silent-sester',
    name: 'The Silent Sester',
    summary:
      'Named once, in a riposte-alignment fix specific to Proxima. No player thread in the corpus discusses it, and no attack is described.',
    knownInfo: [
      'Named in the Week 1 riposte pass: "fixed Proxima\'s riposte alignment against The Silent Sester".',
      'That confirms it can be riposted and that it is a distinct named encounter.',
      'Searches of the player forums returned zero results for this name — it is official-only.',
      'No moveset, location, phase, or reward detail published.',
    ],
    location: 'Not published.',
    source: WEEK1_PATCH,
    hasDetailPage: false,
  },
  {
    slug: 'open-beta-mini-bosses',
    name: 'Hidden mini-bosses (Open Beta)',
    summary:
      'The Open Beta store page confirms optional dungeons with hidden mini-bosses in the early region. Several of the named bosses above are the retail form of these.',
    knownInfo: [
      'Present in optional dungeons during the Open Beta.',
      'Individual names were not listed on the store page; the Week 1 patch notes now supply the retail roster above.',
    ],
    location: 'Optional dungeons in the first explorable region (Open Beta)',
    source: OPEN_BETA,
    hasDetailPage: false,
  },
];

// Balance Patch 1 公布的确切数值 —— 只有两个 Boss 有。
export const BOSS_BALANCE_NUMBERS = [
  { name: 'The Lost Child', baseDamage: '−10%', maxHealth: '−15%' },
  { name: 'The Monolith', baseDamage: '−19%', maxHealth: '−10%' },
] as const;

// 官方仍未关闭的 Boss 相关已知问题。
export const BOSS_KNOWN_ISSUE =
  'Cold Symmetry lists one boss bug as still open in both the 17 August bug-report thread and the Week 1 changelog: "Possible Malborn Offspring bug when using Grisha Remnant Summon during boss fight." It is the only boss issue the developer has flagged and not yet fixed.';

export const BOSS_ROSTER_NOTE =
  'Valve hides every boss achievement in Mortal Shell II, which is why a boss roster could not be assembled from the achievement list the way the Shell and weapon lists were. The names below come from Cold Symmetry\'s own patch notes instead — the Week 1 Update contains a "Bosses and Minibosses" section that names fifteen encounters and describes specific attacks for most of them, and three more names appear in its softlock and cosmetic fixes. That makes this a first-party roster rather than a community-compiled one. What patch notes do not contain is strategy: there are no phase charts, health thresholds, parry timings, or drop tables here, because the developer has never published them. Where an attack is named below, it is named because the developer named it.';
