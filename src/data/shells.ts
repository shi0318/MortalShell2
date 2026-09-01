// Shell 数据：正式版已发售，条目仍按证据版本区分。
// 严格遵循方案第四章：每个 Shell 都带确认状态与来源。
// Open Beta、Trailer、Prequel 条目不能被当作零售版实测结论。
import type { SourceRef } from './sources';

export interface Shell {
  slug: string;
  name: string;
  // 一句话定位
  summary: string;
  // 已知能力（按来源版本标记，未记录的零售版数值不补猜）
  knownAbilities: string[];
  // 获取方式
  acquisition: string;
  source: SourceRef;
  // 是否已满足详情页拆分门槛（方案 5.2）。false = 仅存在于聚合页表格
  hasDetailPage: boolean;
  // optional override when guide lives outside /shells/<slug>/
  detailHref?: string;
}

export const SHELLS: Shell[] = [
  {
    slug: 'harros',
    name: 'Harros',
    summary:
      'The balanced starting Shell returning from the first game — a soldier archetype with even stats across health and stamina.',
    knownAbilities: [
      'Balanced health and stamina distribution',
      'No pronounced weakness — recommended for learning core combat',
    ],
    acquisition: 'Believed to be the default starting Shell, as in the first game.',
    source: {
      status: 'prequel',
      note: 'Based on Mortal Shell (2020), where Harros is the first Shell found. This row has no attached retail-sequel verification.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
  {
    slug: 'tiel',
    name: 'Tiel, the Acolyte',
    summary:
      'One of eight playable Shells in Mortal Shell II. Discoverable in the Open Beta by seeking his remains and possessing him.',
    knownAbilities: [
      'Innate abilities awaken after possession (Open Beta description)',
      'Prequel context: mobile / aggressive identity in Mortal Shell (2020) — sequel kit still limited officially',
    ],
    acquisition: 'Open Beta path — seek Tiel\'s remains, possess him, awaken innate abilities.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/',
      sourceDate: '2026-06-05',
      gameVersion: 'Open Beta store listing',
      note: 'Steam Open Beta page confirms Tiel as one of eight playable Shells.',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: true,
    detailHref: '/tiel/',
  },
  {
    slug: 'solomon',
    name: 'Solomon',
    summary: 'The scholar Shell — high resolve generation supporting ability-heavy builds.',
    knownAbilities: ['Strong resolve economy (prequel behaviour)'],
    acquisition: 'Return unconfirmed.',
    source: {
      status: 'prequel',
      note: 'Prequel Shell. Sequel status not confirmed.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
  {
    slug: 'eredrim',
    name: 'Eredrim, the Venerable',
    summary: 'Confirmed playable in Mortal Shell II — the durable tank archetype, shown carving its own trail in the Official Gameplay Reveal.',
    knownAbilities: [
      'One of three Shells shown in the Official Gameplay Reveal',
      'Prequel context: highest health, lowest stamina — a slow, hits-absorbing tank',
    ],
    acquisition: 'Awakened like other Shells; exact route not published yet.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/news/app/2584270',
      sourceDate: '2026-04-01',
      gameVersion: 'Official Gameplay Reveal',
      note: 'Official Gameplay Reveal names Eredrim, The Venerable as one of three playable Shells.',
      lastChecked: '2026-07-30',
    },
    hasDetailPage: true,
    detailHref: '/eredrim/',
  },
  {
    slug: 'proxima',
    name: 'Proxima, the Broodseeker',
    summary: 'A brand-new Shell built for the sequel — no counterpart in the 2020 game. One of three Shells shown in the Official Gameplay Reveal.',
    knownAbilities: [
      'New to Mortal Shell II — not a returning Shell',
      'Kit and playstyle not yet published; only the "Broodseeker" title is official',
    ],
    acquisition: 'Awakened like other Shells; exact route not published yet.',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/news/app/2584270',
      sourceDate: '2026-04-01',
      gameVersion: 'Official Gameplay Reveal',
      note: 'Official Gameplay Reveal names Proxima, The Broodseeker as one of three playable Shells.',
      lastChecked: '2026-07-30',
    },
    hasDetailPage: true,
    detailHref: '/proxima/',
  },
  {
    slug: 'unknown-reveal-shell',
    name: 'Unidentified new Shell',
    summary:
      'A Shell that appears briefly in the reveal trailer and does not match any prequel Shell.',
    knownAbilities: ['Details unknown — appears in the reveal trailer only'],
    acquisition: 'Unknown.',
    source: {
      status: 'trailer',
      note: 'Seen in the Official Reveal Trailer (~1:42). No system details available yet.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
];
