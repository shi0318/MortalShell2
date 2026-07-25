// Shell 数据（发售前已知信息）
// 严格遵循方案第四章：每个 Shell 都带确认状态与来源。
// 发售后（D-Day）用正式版实测数据替换 trailer/prequel 标记。
import type { SourceRef } from './sources';

export interface Shell {
  slug: string;
  name: string;
  // 一句话定位
  summary: string;
  // 已知能力（发售前多为推测/预告片信息）
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
      note: 'Based on Mortal Shell (2020), where Harros is the first Shell found. To be verified at launch.',
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
    name: 'Eredrim',
    summary: 'The vassal Shell — the highest health pool, a slow but durable tank.',
    knownAbilities: ['Highest health (prequel behaviour)', 'Low stamina — deliberate playstyle'],
    acquisition: 'Return unconfirmed.',
    source: {
      status: 'prequel',
      note: 'Prequel Shell. Sequel status not confirmed.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
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
