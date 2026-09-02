// Weapon 数据：正式版已发售。
// 十三个名字全部逐字来自 Valve 公开成就页（App 2584270）的 "Unlock X" 条目。
// Valve 只公布名字，不公布数值、位置，也不公布哪些算 Weapon、哪些算 Sidearm，
// 所以 type 一栏写 'Weapon or Sidearm（未区分）'，不猜。
//
// 数值来源升级（2026-09-01）：官方两份 patch notes 逐个点名武器并给出改动，
// 这是第一方来源，比社区指南高一级。7 件武器因此有了 official 级别的机制事实：
// Great Martyr's Blade / Axatana / Triarch Repeater / Black Needle / Clockwork Scythe /
// Caged Hystrix / Obsidian Hammer / Salvaged Trebuchaxe。
// 其余 5 件仍然只有名字与解锁率 —— 保持 UNDOCUMENTED，不补猜。
// 一代武器名已全部移出本表 —— 没有一件出现在零售版解锁成就里。
import type { SourceRef } from './sources';

const ACHIEVEMENTS: SourceRef = {
  status: 'official',
  sourceUrl: 'https://steamcommunity.com/stats/2584270/achievements/',
  sourceDate: '2026-09-01',
  gameVersion: 'Mortal Shell II retail, Steam App 2584270',
  lastChecked: '2026-09-01',
  note: 'Valve publishes the achievement name, its description and the global unlock rate. It does not publish damage values, movesets, drop locations, or the Weapon/Sidearm split.',
};

// Balance Patch 1 —— smithbodie [DEVELOPER]，2026-08-20 13:06:04 PDT。
// 逐个武器给出数值：Great Martyr's Blade +20% 攻击伤害、Troubador's Lute +100%、
// Caged Hystrix 与 Triarch Repeater 移除最低 resolve 需求、
// Axatana / Black Needle / Clockwork Scythe 轻击追踪改进、Tarforge 熔炼成本 −75%。
const BALANCE_PATCH_1: SourceRef = {
  status: 'official',
  sourceUrl: 'https://steamcommunity.com/app/2584270/discussions/0/582805931178489108/',
  sourceDate: '2026-08-20',
  gameVersion: 'Balance Patch 1 (PC first, consoles shortly after)',
  lastChecked: '2026-09-02',
  note: 'Cold Symmetry\'s Balance Patch 1 (smithbodie [DEVELOPER], August 20, 2026 @ 1:06:04 pm PDT) lists exact per-weapon balance changes: Great Martyr\'s Blade Attack Damage +20%, Troubador\'s Lute Attack Damage +100%, Caged Hystrix and Triarch Repeater no longer have minimum resolve requirements to fire, and improved tracking for Axatana, Black Needle, and Clockwork Scythe light attacks. It also confirms Black Needle as a weapon rather than a Shell by listing it under the Weapons heading.',
};

// Week 1 Update —— 2026-08-29，gid 690892955941077484。
// Obsidian Hammer 全面平衡调整、Great Martyr's Blade 二次增强（承认前次 +20% 未生效）、
// Salvaged Trebuchaxe: Tarred Fragment 重新设计、Axatana 武器技能加 i-frames + Fragile 层数、
// Weltcap 主被动增强、重武器整体 poise 与伤害调整。
const WEEK_1_UPDATE: SourceRef = {
  status: 'official',
  sourceUrl: 'https://store.steampowered.com/news/app/2584270/view/690892955941077484',
  sourceDate: '2026-08-29',
  gameVersion: 'Week 1 Update',
  lastChecked: '2026-09-01',
  note: 'Cold Symmetry\'s Week 1 Update (August 29, 2026) lists further per-weapon changes under the "Weapons, Items and Balance" heading: Obsidian Hammer had a full balance pass and now hits substantially harder; the Great Martyr\'s Blade deals more damage and the notes admit the prior +20% buff "didn\'t actually make it in the last patch"; Salvaged Trebuchaxe: Tarred Fragment was redesigned; Axatana weapon ability now grants invulnerability frames and inflicts Fragile stacks; Weltcap is stronger in both active and passive forms; and heavy weapons in general had a poise and damage pass.',
};

export interface Weapon {
  slug: string;
  name: string;
  // 武器类型（如 Greatsword / Hammer & Chisel）
  type: string;
  // 一句话定位
  summary: string;
  // 已知属性（按来源版本标记，未记录的零售版数值不补猜）
  knownStats: string[];
  // 获取方式
  acquisition: string;
  // 解锁成就名 + 全球解锁率（2026-09-01 快照）
  unlockAchievement?: string;
  unlockRate?: number;
  source: SourceRef;
  // 是否满足详情页拆分门槛（方案 5.2）
  hasDetailPage: boolean;
}

const UNDOCUMENTED = ['No damage values, moveset, or scaling published.'];

// 社区来源：Steam 指南 "All Achievements in Mortal Shell 2"，作者 аврил лавин，
// 2026-08-21 发布 / 2026-08-22 更新。它把 Black Needle 归到 Weapons，并给出 Merrick 卖地图、
// Tarforge 上限 +16 这类信息。玩家整理，不是开发商声明。
const ACH_GUIDE: SourceRef = {
  status: 'community',
  sourceUrl: 'https://steamcommunity.com/app/2584270/guides/',
  sourceDate: '2026-08-22',
  gameVersion: 'Mortal Shell II retail',
  lastChecked: '2026-09-01',
  note: 'Steam guide "All Achievements in Mortal Shell 2" by аврил лавин, posted 21 August 2026 and updated 22 August 2026. It states that weapon location maps are sold by the merchant Merrick in Marrow Keep, and that the Tarforge upgrade cap is +16 — a figure other players contradict. Player-compiled, not a developer statement. Its grouping of Black Needle with the Weapons has since been confirmed first-party by Balance Patch 1, so that row no longer relies on this source.',
};

// 社区报告的上限与商人，供页面引用。
// 注意：+16 是「成就指南」的说法，但玩家报告晚期道具可以突破它 —— 这是个未解决的矛盾，
// 页面必须把矛盾本身写出来，不能只挑一个数字当事实。
export const WEAPON_UPGRADE = {
  maxLevel: '+16',
  forge: 'Tarforge',
  mapMerchant: 'Merrick, in Marrow Keep',
  // 官方数值：Balance Patch 1 明确熔炼成本下调 75%（可标 official）
  smeltCostReduction: '75% less gloom since Balance Patch 1',
} as const;

// 上限争议：这是站内唯一一处「社区来源互相矛盾」的地方，必须原样展示。
export const UPGRADE_CAP_DISPUTE = {
  guideClaim:
    'The achievement guide by аврил лавин decodes "Over 9000" ("Max out a Weapon at the Tarforge") as upgrading any weapon to +16.',
  contradictingReports: [
    'Baron01 (31 August 2026): "You get an item from late game area that unlocks weapon upgrades past lvl16", estimating an 11,000-gold cost at +18. They beat the final boss at +16 and only received the Tarforge upgrade material afterwards.',
    'lieandjoy (31 August 2026): found a forge upgrade in a chest in the final stages of the game, and posted a build listing level 25 weapons.',
    'Toni (31 August 2026): reports a "+18 Axatana".',
    'A commenter on the Bloodcursed thread (29 August 2026): "when the weapon is 25+, it need 35K souls to reforge just for one time."',
  ],
  unresolved:
    'Nobody in the corpus answers whether the late-game forge upgrade removes the cap entirely or just raises it, and Cold Symmetry has never published a maximum. Treat +16 as the cap before that item and unknown after it.',
} as const;

// 语料里出现、但没有对应解锁成就的武器名。
// 说明成就列表 ≠ 完整武器表：13 是「有成就的武器」数量，不是武器总数。
export const WEAPONS_WITHOUT_ACHIEVEMENTS = [
  {
    name: 'Iconoclast',
    note: 'A sword. Players associate it with Harros from the first game, but that is speculation — the developer has never named it.',
  },
  {
    name: 'Naylshotte',
    note: 'A prologue / starter firearm, discussed by players often enough to have its own search results. No unlock achievement, consistent with a weapon you begin with rather than find.',
  },
  {
    name: "Troubador's Lute",
    note: 'Named in Balance Patch 1 with an exact number — Attack Damage +100%, the largest single buff in the patch. Spelled "Troubador\'s" by the developer. Officially confirmed to exist, yet it has no unlock achievement at all.',
  },
  {
    name: 'Weltcap',
    note: 'Named in the Week 1 Update as "stronger in both its active and passive forms", so it has an active ability. No unlock achievement.',
  },
] as const;

// 按解锁率从高到低 —— 越靠前越可能是早期获得。
export const WEAPONS: Weapon[] = [
  {
    slug: 'axe-and-dagger',
    name: 'Axe and Dagger',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'The earliest of the thirteen by unlock rate, and the only one that also existed as an Open Beta objective — the Beta had a "Find Axe and Dagger" achievement of its own.',
    knownStats: UNDOCUMENTED,
    acquisition: 'Was findable in the Open Beta region. Retail location not published.',
    unlockAchievement: 'Deep Cuts',
    unlockRate: 64.7,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
  {
    slug: 'forgotten-crossbow',
    name: 'Forgotten Crossbow',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'A ranged name, and the second-most-unlocked of the thirteen. Neither patch mentions it, so unlike the Caged Hystrix and Triarch Repeater there is no published confirmation that it fires.',
    knownStats: UNDOCUMENTED,
    acquisition: 'Not published.',
    unlockAchievement: 'Old School',
    unlockRate: 63.9,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
  {
    slug: 'veterans-battle-axe',
    name: "Veteran's Battle Axe",
    type: 'Weapon or Sidearm (split not published)',
    summary: 'Unlocked by roughly six in ten players, so an early or hard-to-miss pickup.',
    knownStats: UNDOCUMENTED,
    acquisition: 'Not published.',
    unlockAchievement: 'Cut You Down to Size',
    unlockRate: 59.3,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
  {
    slug: 'great-martyrs-blade',
    name: "Great Martyr's Blade",
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'The most-buffed weapon in the game, and the closest thing to a returning name: Mortal Shell (2020) had a "Martyr\'s Blade". Whether this is the same weapon rescaled or a new one sharing the name is not stated.',
    knownStats: [
      'Balance Patch 1 (2026-08-20) announced Attack Damage +20% — but the Week 1 notes admit that buff "didn\'t actually make it in the last patch", so the +20% never shipped.',
      'The Week 1 Update (2026-08-29) says it "deals more damage" and is "even stronger now" to make up for the missed patch. No replacement percentage is given.',
      'A heavy weapon, so it also received the Week 1 poise and damage pass applied to heavy weapons generally.',
      'Base damage numbers and scaling are still unpublished.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Big Boi',
    unlockRate: 55.5,
    source: WEEK_1_UPDATE,
    hasDetailPage: false,
  },
  {
    slug: 'salvaged-trebuchaxe',
    name: 'Salvaged Trebuchaxe',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'A new name with no prequel counterpart. Its weapon ability component, the Tarred Fragment, was rebuilt a week after launch.',
    knownStats: [
      'Has a component called Tarred Fragment, redesigned in the Week 1 Update because it was "simultaneously overpowered and broken".',
      'That means guides written in the first nine days describe a version of this weapon that no longer exists.',
      'What the redesigned Tarred Fragment now does is not described in the notes.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Chop Chop',
    unlockRate: 47.5,
    source: WEEK_1_UPDATE,
    hasDetailPage: false,
  },
  {
    slug: 'axatana',
    name: 'Axatana',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'Returns from the first game, where it was the "Martelli Axatana" — a switchable axe/katana. The only weapon named in both post-launch patches, and the one with the most confirmed mechanics.',
    knownStats: [
      'Its weapon ability grants invulnerability frames and inflicts Fragile stacks (Week 1 Update). This is the only weapon ability whose effect the developer states outright.',
      'Has light attacks, whose tracking was improved in Balance Patch 1.',
      'Its combat Tarstone active now triggers correctly (Week 1 Update), so it interacts with the Tarstone system.',
      'Its achievement is titled "Dual Wielding", consistent with a two-stance weapon, but that is a title and not a mechanic statement.',
      'No damage values or scaling published.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Dual Wielding',
    unlockRate: 43.6,
    source: WEEK_1_UPDATE,
    hasDetailPage: false,
  },
  {
    slug: 'triarch-repeater',
    name: 'Triarch Repeater',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'Confirmed to be a weapon that fires, because Balance Patch 1 removed its minimum resolve requirement "to fire". That is the strongest published hint that it is a Sidearm rather than a Weapon.',
    knownStats: [
      'It fires, and as of Balance Patch 1 it no longer has a minimum resolve requirement to do so (previously it did).',
      'Resolve returns from the first game as a resource, and this line confirms it gates ranged use in the sequel.',
      'Named alongside Caged Hystrix in the same patch line, so the two share a firing mechanic.',
      'No damage values, ammo counts, or scaling published.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Old Painless',
    unlockRate: 39.0,
    source: BALANCE_PATCH_1,
    hasDetailPage: false,
  },
  {
    slug: 'black-needle',
    name: 'Black Needle',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'Its achievement reads "Unlock Black Needle" without the definite article every other item entry uses, which is why the name is often mistaken for a Shell. It is not one: Balance Patch 1 lists it under Weapons.',
    knownStats: [
      'Balance Patch 1 improved tracking for its light attacks, grouping it with the Axatana and Clockwork Scythe. Shells do not have light attacks, so this settles the Shell-versus-weapon question first-party.',
      'Has light attacks, therefore a melee weapon rather than a Sidearm.',
      'No damage values or scaling published.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Point Taken',
    unlockRate: 38.1,
    source: BALANCE_PATCH_1,
    hasDetailPage: false,
  },
  {
    slug: 'clockwork-scythe',
    name: 'Clockwork Scythe',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'A new name with no prequel counterpart, confirmed as a melee weapon by a patch line about its light attacks.',
    knownStats: [
      'Balance Patch 1 improved tracking for its light attacks, alongside the Axatana and Black Needle.',
      'Has light attacks, therefore a melee weapon rather than a Sidearm.',
      'No damage values or scaling published.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Like Clockwork',
    unlockRate: 35.8,
    source: BALANCE_PATCH_1,
    hasDetailPage: false,
  },
  {
    slug: 'caged-hystrix',
    name: 'Caged Hystrix',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'Named like a creature rather than a weapon, but Balance Patch 1 confirms it fires — which makes it one of the two likeliest Sidearms on the list.',
    knownStats: [
      'It fires, and as of Balance Patch 1 it no longer has a minimum resolve requirement to do so.',
      'Named in the same patch line as the Triarch Repeater, so the two share a firing mechanic.',
      'Its achievement uses the definite article ("Unlock the Caged Hystrix"), the pattern every item entry follows.',
      'No damage values, ammo counts, or scaling published.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Spiked',
    unlockRate: 35.7,
    source: BALANCE_PATCH_1,
    hasDetailPage: false,
  },
  {
    slug: 'obsidian-hammer',
    name: 'Obsidian Hammer',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'Rebuilt a week after launch: the Week 1 Update gave it a full balance pass and says it "now hits substantially harder". Any damage impression formed in the first nine days is out of date.',
    knownStats: [
      'Received a full balance pass in the Week 1 Update and "now hits substantially harder" — the strongest buff language used for any weapon.',
      'A heavy weapon, so it also received the Week 1 poise and damage pass applied to heavy weapons generally.',
      'No damage values or scaling published, before or after the buff.',
    ],
    acquisition: 'Not published.',
    unlockAchievement: 'Stop - Hammer Time',
    unlockRate: 33.9,
    source: WEEK_1_UPDATE,
    hasDetailPage: false,
  },
  {
    slug: 'cursed-child',
    name: 'Cursed Child',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'The strangest name on the list. It is grouped here because its achievement reads "Unlock the Cursed Child" — the article pattern every item entry follows and no Shell entry does. Neither patch mentions it, so this row rests on the article pattern alone.',
    knownStats: UNDOCUMENTED,
    acquisition: 'Not published.',
    unlockAchievement: 'Beautiful Baby',
    unlockRate: 32.4,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
  {
    slug: 'ballistazooka',
    name: 'Ballistazooka',
    type: 'Weapon or Sidearm (split not published)',
    summary:
      'The rarest of the thirteen at 31.9%, so the best candidate for a late or well-hidden pickup. Neither post-launch patch touches it.',
    knownStats: UNDOCUMENTED,
    acquisition: 'Not published. The low unlock rate suggests late or optional.',
    unlockAchievement: 'Speared',
    unlockRate: 31.9,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
];

// 一代武器名，在零售版解锁成就里没有出现（Axatana 与 Martyr's Blade 例外，已收录在上表）。
export const PREQUEL_ONLY_WEAPONS = [
  'Hallowed Sword',
  'Hammer and Chisel',
  'Smoldering Mace',
] as const;

export const WEAPON_CLASSIFICATION_NOTE =
  'Mortal Shell II has separate achievements for "Unlock all Weapons" (Lord of War, 26.1%) and "Unlock all Sidearms" (Guns. Lots of Guns, 23.8%), which proves the two categories exist and are tracked separately. What Valve never publishes is which of the thirteen names below belongs to which category, so every row is labelled "Weapon or Sidearm" rather than guessed. The post-launch patch notes narrow it in two places without settling it: Balance Patch 1 removed minimum resolve requirements "to fire" from the Caged Hystrix and Triarch Repeater, which means both fire and makes them the likeliest Sidearms, and the same patch improved light-attack tracking for the Axatana, Black Needle and Clockwork Scythe, which makes those three melee. That is five of thirteen placed on mechanical evidence rather than on their names. It also settles a question this page previously answered from a community guide: Black Needle is a weapon, confirmed by Cold Symmetry, not a Shell.';
