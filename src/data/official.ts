// Official confirmed facts only - used by homepage and trust surfaces.
import { SITE } from './site';

export interface OfficialFact {
  label: string;
  value: string;
  sourceLabel: string;
  sourceUrl: string;
}

export const OFFICIAL_FACTS: OfficialFact[] = [
  {
    label: 'Full release',
    value:
      'Mortal Shell II is available now. The worldwide digital launch was August 20, 2026, on PlayStation 5, Xbox Series X|S, and Steam.',
    sourceLabel: 'Playstack + Steam',
    sourceUrl: SITE.playstackReleaseUrl,
  },
  {
    label: 'Platforms',
    value:
      'The released game is available on Steam, PlayStation 5, and Xbox Series X|S.',
    sourceLabel: 'Playstack',
    sourceUrl: SITE.playstackReleaseUrl,
  },
  {
    label: 'Combat',
    value:
      'There is no stamina bar for attacks or dodges. Break enemy posture to create critical openings, then plan melee and ranged weapon upgrades.',
    sourceLabel: 'Steam',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'Shells & World',
    value:
      'The full game has eight playable Shells in a compact, interconnected world with more than 80 dungeons. Explore off the main path for Shells, weapons, upgrades, and curiosities.',
    sourceLabel: 'Steam',
    sourceUrl: SITE.fullGameUrl,
  },
];

export const OFFICIAL_LINKS = [
  { label: 'Steam full game', href: SITE.fullGameUrl },
  { label: 'Steam Open Beta', href: SITE.openBetaUrl },
  { label: 'Official site', href: SITE.officialSite },
  { label: 'Playstack announcement', href: SITE.playstackReleaseUrl },
] as const;
