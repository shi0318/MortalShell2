// Shell 数据：正式版已发售。
// 成就名与全球解锁率来自 Valve 公开成就页（App 2584270），逐字照抄，标 official。
// 「哪些名字是 Shell」以及隐藏成就的具体要求来自玩家整理的 Steam 指南，标 community，
// 理由写在 SHELL_CLASSIFICATION_NOTE 里，页面必须原样展示。
// 数值、技能、Build 一律不补猜。
import type { SourceRef } from './sources';

const ACHIEVEMENTS: SourceRef = {
  status: 'official',
  sourceUrl: 'https://steamcommunity.com/stats/2584270/achievements/',
  sourceDate: '2026-09-01',
  gameVersion: 'Mortal Shell II retail, Steam App 2584270',
  lastChecked: '2026-09-01',
  note: 'Valve publishes the achievement name, the description, and the global unlock percentage. It does not publish stats, abilities, or which unlockables are Shells.',
};

// 社区来源：Steam 指南 "All Achievements in Mortal Shell 2"，作者 аврил лавин，
// 2026-08-21 发布 / 2026-08-22 更新。它解码了 Valve 隐藏的成就描述，并给出获取路线。
// 这是玩家整理，不是开发商声明 —— 凡是只有它支持的事实都必须标 community。
const ACH_GUIDE: SourceRef = {
  status: 'community',
  sourceUrl: 'https://steamcommunity.com/app/2584270/guides/',
  sourceDate: '2026-08-22',
  gameVersion: 'Mortal Shell II retail',
  lastChecked: '2026-09-01',
  note: 'Steam guide "All Achievements in Mortal Shell 2" by аврил лавин, posted 21 August 2026 and updated 22 August 2026. It decodes the hidden achievement requirements and gives acquisition routes. Player-compiled, not a developer statement.',
};

// 官方 Week 1 Update patch notes（2026-08-29）在 [h3]Shells[/h3] 标题下逐个点名
// Eredrim / Proxima / Genessa / Smert / Gragu，这是开发商第一方确认「这些名字是 Shell」。
// Lazlo 只在 softlock 段落被提到（Lazlo's Rekindle / Lazlo's armor loop），属间接确认。
// Sariel 在官方公告里 0 次出现 —— 它是 Shell 这件事目前只有社区指南支持。
const PATCH_NOTES: SourceRef = {
  status: 'official',
  sourceUrl: 'https://store.steampowered.com/news/app/2584270/view/690892955941077484',
  sourceDate: '2026-08-29',
  gameVersion: 'Week 1 Update',
  lastChecked: '2026-09-01',
  note: 'Cold Symmetry\'s Week 1 Update notes list this name under the "Shells" heading, which is first-party confirmation that it is a Shell rather than a weapon. The notes describe bug fixes, not stats.',
};

export interface Shell {
  slug: string;
  name: string;
  // 一句话定位
  summary: string;
  // 已知能力（按来源版本标记，未记录的零售版数值不补猜）
  knownAbilities: string[];
  // 获取方式
  acquisition: string;
  // 该 Shell 的解锁成就名 + 全球解锁率（2026-09-01 快照）
  unlockAchievement?: string;
  unlockRate?: number;
  // 「凭什么说它是 Shell」—— 这一栏必须在页面上展示，不同 Shell 的证据强度不一样
  shellConfirmedBy: string;
  source: SourceRef;
  // 是否已满足详情页拆分门槛（方案 5.2）。false = 仅存在于聚合页表格
  hasDetailPage: boolean;
  // optional override when guide lives outside /shells/<slug>/
  detailHref?: string;
}

// 按解锁率从高到低排列 —— 这个顺序本身就是最可能的获得顺序。
export const SHELLS: Shell[] = [
  {
    slug: 'tiel',
    name: 'Tiel, the Acolyte',
    summary:
      'The first Shell most players claim, and the only one that was also available in the Open Beta. Returning from the 2020 game.',
    knownAbilities: [
      'Innate abilities awaken after possession (Open Beta description)',
      'Prequel context: mobile / aggressive identity in Mortal Shell (2020) — the retail kit is still unpublished',
    ],
    acquisition: 'Seek Tiel\'s remains and possess him. Was also obtainable on the Open Beta route. Like most Shells, the body sits near Zhirelle, the Shellkeeper.',
    shellConfirmedBy: 'Official Gameplay Reveal (2026-04-01)',
    unlockAchievement: 'Forever Alone?',
    unlockRate: 79.7,
    source: ACHIEVEMENTS,
    hasDetailPage: true,
    detailHref: '/tiel/',
  },
  {
    slug: 'proxima',
    name: 'Proxima, the Broodseeker',
    summary:
      'New to the sequel, with no counterpart in the 2020 game. Unlocked by almost as many players as Tiel, so it is an early acquisition rather than a late one.',
    knownAbilities: [
      'Has a hook shot (grapple) and an ability called Biosampler — both named in the Week 1 Update notes',
      'New to Mortal Shell II — not a returning Shell',
      'Named in the Official Gameplay Reveal as one of three Shells that "carve a different trail"',
      'No stats or damage numbers published',
    ],
    shellConfirmedBy: 'Official Gameplay Reveal + Week 1 Update notes',
    acquisition: 'Route not published. The 78.0% unlock rate puts it alongside Tiel in the early game.',    unlockAchievement: 'Arrival',
    unlockRate: 78.0,
    source: ACHIEVEMENTS,
    hasDetailPage: true,
    detailHref: '/proxima/',
  },
  {
    slug: 'eredrim',
    name: 'Eredrim, the Venerable',
    summary:
      'Returning from the 2020 game, where it was the durable, slow archetype. The 22-point gap below Proxima suggests it arrives after the opening stretch.',
    knownAbilities: [
      'Has an ability called Shoulder Bash (named in the Week 1 Update notes)',
      'One of three Shells shown in the Official Gameplay Reveal',
      'Prequel context: highest health, lowest stamina — a slow, hits-absorbing tank. Not verified for the sequel.',
    ],
    acquisition: 'Route not published.',
    shellConfirmedBy: 'Official Gameplay Reveal + Week 1 Update notes',
    unlockAchievement: 'Vengeance is Mine',
    unlockRate: 56.7,
    source: ACHIEVEMENTS,
    hasDetailPage: true,
    detailHref: '/eredrim/',
  },
  {
    slug: 'smert',
    name: 'Smert',
    summary:
      'Built around a stance rather than a cooldown ability: the Week 1 patch notes describe Smert as having a "permanent fight stance", which no other Shell is described that way.',
    knownAbilities: [
      'Permanent fight stance (named in the Week 1 Update notes)',
      'Can destroy projectiles while in that stance',
      'No stats or numbers published.',
    ],
    acquisition:
      'Found near Zhirelle, the Shellkeeper, like most Shells; the location can be tracked by spending Gloom (community-reported).',
    shellConfirmedBy: 'Week 1 Update notes, Shells section',
    unlockAchievement: 'My Brether',
    unlockRate: 49.1,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
  {
    slug: 'gragu',
    name: 'Gragu',
    summary:
      'New name from the retail achievement list, unlocked at almost the same rate as Smert. Unlike most Shells it comes from a dialogue quest rather than a body you stumble on.',
    knownAbilities: [
      'Carries the Heart of Vatra (named in the Week 1 Update notes)',
      'Has a sheep form — the patch notes fix the Heart of Vatra trailing behind you while in it',
      'No stats or numbers published.',
    ],
    acquisition:
      'Community-reported route: meet him in the bar, exhaust every dialogue option, then bring him a heart found east of the bar through a portal to a temple.',
    shellConfirmedBy: 'Week 1 Update notes, Shells section',
    unlockAchievement: 'Heartless',
    unlockRate: 48.3,
    source: ACH_GUIDE,
    hasDetailPage: false,
  },
  {
    slug: 'sariel',
    name: 'Sariel',
    summary:
      'New name from the retail achievement list. Its achievement is titled "The Alchemist", which hints at a theme but confirms no mechanic.',
    knownAbilities: [
      'Nothing published by the developer — Sariel is absent from every official announcement.',
      'Players report a pain-conversion mechanic where damage becomes pain and pain heals on hit; unverified.',
    ],
    acquisition:
      'Found near Zhirelle, the Shellkeeper; the location can be tracked by spending Gloom (community-reported).',
    shellConfirmedBy: 'Community achievement guide only — no first-party mention',
    unlockAchievement: 'The Alchemist',
    unlockRate: 35.2,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
  {
    slug: 'sester-genessa',
    name: 'Sester Genessa',
    summary:
      'The hidden Shell. Valve publishes the achievement name ("Sester") but not its requirement, and unlike the other seven her body is not found near the Shellkeeper — she has to be earned through a side quest.',
    knownAbilities: [
      'Fights alongside astral copies, called Doubles or Stray Doubles in the Week 1 Update notes',
      'Has a dash, and a separate "corrupted" version of it',
      'Has an upgrade called Intangible that applies during grab attacks',
      'Was the checkpoint NPC in Mortal Shell (2020) — players note the change; no official statement ties the two.',
    ],
    acquisition:
      'Community-reported route: in the lower eastern map area, head to the graves and find a red-petal-covered area surrounded by sisters. Interact with a floating red orb by the wall, defeat Sister Secunda in the opened dimension, then bring the censer she drops to Sester Genessa.',
    shellConfirmedBy: 'Week 1 Update notes, Shells section (as "Genessa")',
    unlockAchievement: 'Sester',
    unlockRate: 33.9,
    source: ACH_GUIDE,
    hasDetailPage: false,
  },
  {
    slug: 'lazlo',
    name: 'Lazlo',
    summary:
      'The lowest-unlock Shell on the list at 31.4%, which makes it the most likely late-game or well-hidden acquisition of the eight.',
    knownAbilities: [
      'Has an ability called Rekindle (named in the Week 1 Update notes)',
      'Players describe a heat meter that stops draining once full and holds at 100% until the ability is used again; unverified.',
      'No stats or numbers published.',
    ],
    acquisition:
      'Found near Zhirelle, the Shellkeeper; the location can be tracked by spending Gloom (community-reported). The low rate suggests a late or optional acquisition.',
    shellConfirmedBy: 'Week 1 Update notes, indirectly (fixes to Lazlo\'s Rekindle)',
    unlockAchievement: 'Down with the Thickness',
    unlockRate: 31.4,
    source: ACHIEVEMENTS,
    hasDetailPage: false,
  },
];

// 一代 Shell，在零售版解锁成就里完全没有出现。
export const PREQUEL_ONLY_SHELLS = ['Harros', 'Solomon'] as const;

// 装备/羁绊层级：社区指南给出 Tier IV 为上限，且 8 个 Shell 全部拉满才解 Seeking the Past。
export const SHELL_BONDING = {
  maxTier: 'Tier IV',
  glimpsesPerShell: 27,
  glimpsesTotal: 216,
  note: 'Steam guide "How to unlock all Shell Memories / get Glimpses" by Zyloc, 29 August 2026, states that Seeking the Past needs Tier IV on all eight Shells, that this costs 27 Glimpses per Shell for 216 total, that breaking a Glimpse Stone after 20 enemy kills yields 3 Glimpses, and that up to 13 Glimpse Stones can be bought from the hub merchant. Player-compiled, not a developer statement.',
} as const;

export const SHELL_CLASSIFICATION_NOTE =
  'Valve publishes twenty-one "Unlock X" achievements but hides one of them ("Sester"), so the Shell-versus-weapon split cannot be read off the official list alone. It does not need to be guessed either. Cold Symmetry\'s Week 1 Update patch notes contain a section headed "Shells" that names Eredrim, Proxima, Genessa, Smert and Gragu individually — first-party confirmation for five of the eight. Tiel, Eredrim and Proxima were already named as playable Shells in the Official Gameplay Reveal. Lazlo is confirmed only indirectly, by patch-note fixes to "Lazlo\'s Rekindle" and "Lazlo\'s armor loop". That leaves exactly one name with no first-party support at all: Sariel appears nowhere in any official announcement, and its Shell status rests solely on a player-compiled achievement guide. The eight-name total is independently corroborated by a second guide, which states that the Seeking the Past achievement requires maximum bonding with "all (8) Shells", and it matches the eight playable Shells the developer announced. The Confirmed-by column above records which of these applies to each row, because the evidence is genuinely not equal across them.';
