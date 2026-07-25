// Official confirmed facts only — used by homepage and trust surfaces.
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
    value: 'August 20, 2026 worldwide digital launch',
    sourceLabel: 'Playstack + Steam',
    sourceUrl: SITE.playstackReleaseUrl,
  },
  {
    label: 'Platforms',
    value: 'PlayStation 5, Xbox Series X|S, and Steam',
    sourceLabel: 'Playstack',
    sourceUrl: SITE.playstackReleaseUrl,
  },
  {
    label: 'Developer / publisher',
    value: ${SITE.developer} / ,
    sourceLabel: 'Steam',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'Game identity',
    value: 'Standalone sequel action-RPG with interconnected open-world exploration',
    sourceLabel: 'Steam full game',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'Combat framing',
    value: 'Combat is unrestricted by stamina; focus on shattering enemy posture for critical strikes',
    sourceLabel: 'Steam + mortalshell.com',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'Shell roster size',
    value: 'Eight playable Shells (Open Beta names Tiel, the Acolyte among them)',
    sourceLabel: 'Steam Open Beta',
    sourceUrl: SITE.openBetaUrl,
  },
  {
    label: 'Open Beta scope',
    value: 'Opening hours / opening three hours: Prologue into the first explorable region',
    sourceLabel: 'Steam Open Beta',
    sourceUrl: SITE.openBetaUrl,
  },
  {
    label: 'Open Beta carry-over',
    value: 'Full inventory resets; Flayed Harbinger cosmetic + optional prologue skip after Marrow Keep',
    sourceLabel: 'Steam Open Beta',
    sourceUrl: SITE.openBetaUrl,
  },
  {
    label: 'Steam packages (USD)',
    value: Base game ; Devout Edition ,
    sourceLabel: 'Steam full game',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'PC minimum bar',
    value: 'Win 10/11, 16 GB RAM, RTX 2060 SUPER / RX 6600 class GPU, 30 GB, SSD required',
    sourceLabel: 'Steam',
    sourceUrl: SITE.openBetaUrl,
  },
];

export const OFFICIAL_LINKS = [
  { label: 'Steam full game', href: SITE.fullGameUrl },
  { label: 'Steam Open Beta', href: SITE.openBetaUrl },
  { label: 'Official site', href: SITE.officialSite },
  { label: 'Playstack announcement', href: SITE.playstackReleaseUrl },
] as const;
