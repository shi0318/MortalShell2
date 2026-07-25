// Boss 数据（发售前已知信息）
// 遵循方案第四章：每个 Boss 都带确认状态与来源。
// 发售日（D-Day）优先补全 Boss 攻略，满足门槛后写完就发独立详情页。
import type { SourceRef } from './sources';

export interface Boss {
  slug: string;
  name: string;
  // 一句话定位
  summary: string;
  // 已知信息（发售前多为预告片线索）
  knownInfo: string[];
  // 出现区域（若已知）
  location: string;
  source: SourceRef;
  // 是否满足详情页拆分门槛（方案 5.2）
  hasDetailPage: boolean;
  detailHref?: string;
}

export const BOSSES: Boss[] = [
  {
    slug: 'magdalena-lady-of-the-woods',
    name: 'Magdalena, the Lady of the Woods',
    summary:
      'Named figure/destination on the Open Beta path. Official Steam text says players press onward toward Magdalena after early exploration and challenges.',
    knownInfo: [
      'Officially named on the Open Beta Steam page',
      'Associated with the early open-world path after Prologue content',
      'Role (boss vs NPC vs region figure) not fully detailed on the store page',
    ],
    location: 'Beyond the early Open Beta path / toward the first region objective',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/',
      sourceDate: '2026-06-05',
      gameVersion: 'Open Beta store listing',
      note: 'Named in the Open Beta About section. Full encounter details pending hands-on verification.',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: true,
    detailHref: '/magdalena/',
  },
  {
    slug: 'open-beta-mini-bosses',
    name: 'Hidden mini-bosses (Open Beta)',
    summary:
      'The Open Beta store page confirms optional dungeons with hidden mini-bosses and challenges in the early region.',
    knownInfo: [
      'Present in optional dungeons during the Open Beta',
      'Individual names and movesets not listed on the store page',
    ],
    location: 'Optional dungeons in the first explorable region (Open Beta)',
    source: {
      status: 'official',
      sourceUrl: 'https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/',
      sourceDate: '2026-06-05',
      gameVersion: 'Open Beta store listing',
      note: 'Mentioned generically on Steam; individual entries will split out after verification.',
      lastChecked: '2026-07-24',
    },
    hasDetailPage: false,
  },

  {
    slug: 'trailer-cathedral-knight',
    name: 'Cathedral guardian (working name)',
    summary:
      'A large armoured foe shown in the reveal trailer within a ruined cathedral setting. Name and moveset unknown.',
    knownInfo: [
      'Heavily armoured, wields a two-handed weapon',
      'Appears in a cathedral-like arena in the reveal trailer',
    ],
    location: 'Unknown — cathedral setting seen in trailer',
    source: {
      status: 'trailer',
      note: 'Seen in the Official Reveal Trailer. Placeholder name until the developer confirms it.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
  {
    slug: 'trailer-gloom-beast',
    name: 'Gloom-wreathed beast (working name)',
    summary:
      'A creature surrounded by the Gloom effect featured prominently in trailer marketing. Details unknown.',
    knownInfo: ['Associated with the Gloom mechanic', 'Large, fast-moving silhouette'],
    location: 'Unknown',
    source: {
      status: 'trailer',
      note: 'Seen in trailer footage. No confirmed name or attack patterns.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
];
