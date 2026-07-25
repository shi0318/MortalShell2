// Weapon 数据（发售前已知信息）
// 遵循方案第四章：每件武器都带确认状态与来源。
// 发售后用正式版实测数据替换 trailer/prequel 标记，满足门槛的拆独立详情页。
import type { SourceRef } from './sources';

export interface Weapon {
  slug: string;
  name: string;
  // 武器类型（如 Greatsword / Hammer & Chisel）
  type: string;
  // 一句话定位
  summary: string;
  // 已知属性（发售前多为推测/预告片信息）
  knownStats: string[];
  // 获取方式
  acquisition: string;
  source: SourceRef;
  // 是否满足详情页拆分门槛（方案 5.2）
  hasDetailPage: boolean;
}

export const WEAPONS: Weapon[] = [
  {
    slug: 'hallowed-sword',
    name: 'Hallowed Sword',
    type: 'Longsword',
    summary:
      'The balanced starting weapon returning from the first game — moderate reach, quick recovery, forgiving for new players.',
    knownStats: [
      'Balanced damage and speed (prequel behaviour)',
      'Standard moveset with reliable thrust follow-up',
    ],
    acquisition: 'Believed to be a default starting weapon, as in the first game.',
    source: {
      status: 'prequel',
      note: 'Based on Mortal Shell (2020). Sequel weapon list not yet officially confirmed.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
  {
    slug: 'hammer-and-chisel',
    name: 'Hammer and Chisel',
    type: 'Blunt / Heavy',
    summary:
      'A heavy two-part weapon from the prequel — high poise damage, slow but punishing swings.',
    knownStats: ['High poise/stagger damage (prequel behaviour)', 'Slow attack speed'],
    acquisition: 'Return unconfirmed.',
    source: {
      status: 'prequel',
      note: 'Prequel weapon. Sequel status not confirmed.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
  {
    slug: 'martelli-axatana',
    name: 'Martelli Axatana',
    type: 'Dual-mode (Axe / Katana)',
    summary:
      'A switchable weapon from the prequel that alternates between an axe and a katana stance.',
    knownStats: ['Two stances with distinct movesets (prequel behaviour)'],
    acquisition: 'Return unconfirmed.',
    source: {
      status: 'prequel',
      note: 'Prequel weapon. Sequel status not confirmed.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
  {
    slug: 'smoldering-mace',
    name: 'Smoldering Mace',
    type: 'Blunt',
    summary: 'A fire-infused mace from the prequel, effective against poise-heavy enemies.',
    knownStats: ['Fire scaling (prequel behaviour)'],
    acquisition: 'Return unconfirmed.',
    source: {
      status: 'prequel',
      note: 'Prequel weapon. Sequel status not confirmed.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
  {
    slug: 'trailer-greatsword',
    name: 'Unidentified greatsword',
    type: 'Greatsword (unconfirmed)',
    summary: 'A large blade wielded by the protagonist in the reveal trailer; not a known prequel weapon.',
    knownStats: ['Details unknown — appears in the reveal trailer only'],
    acquisition: 'Unknown.',
    source: {
      status: 'trailer',
      note: 'Seen in the Official Reveal Trailer. No stats available yet.',
      lastChecked: '2026-07-23',
    },
    hasDetailPage: false,
  },
];
