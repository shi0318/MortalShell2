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
      'Mortal Shell II is available from August 20, 2026, with the worldwide digital launch on PlayStation 5, Xbox Series X|S, and Steam. Devout Edition pre-orders provided up to three days of early access before the general launch.',
    sourceLabel: 'Playstack + Steam',
    sourceUrl: SITE.playstackReleaseUrl,
  },
  {
    label: 'Platforms',
    value:
      'PlayStation 5, Xbox Series X|S, and Steam are the three launch platforms named by Cold Symmetry and Playstack. No Switch or Switch 2 version has been announced, and neither Microsoft nor Sony has announced a subscription deal. The Open Beta was PC-only, while the full game is available on all three listed platforms.',
    sourceLabel: 'Playstack',
    sourceUrl: SITE.playstackReleaseUrl,
  },
  {
    label: 'Developer / publisher',
    value:
      SITE.developer +
      ' / ' +
      SITE.publisher +
      ' — the same developer and publisher that shipped Mortal Shell in 2020, so the sequel is being built by the original team rather than handed to another studio. Playstack publishes on all three platforms. No co-developer or support studio is credited on the store page.',
    sourceLabel: 'Steam full game',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'Game identity',
    value:
      'Steam calls it a "standalone sequel action-RPG" built around an "immersive, interconnected open world" that is "expansive yet deliberately compact" — a deliberate break from the first game\'s single-region structure. Standalone means no prior playthrough is assumed. Scattered through that world are more than 80 dungeons, per the same store description.',
    sourceLabel: 'Steam full game',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'Combat framing',
    value:
      'Combat is described as "agile yet grounded" and explicitly "unrestricted by stamina" — no stamina bar gates your attacks or dodges. What decides a fight instead is shattering enemy posture to open a critical strike, so pressure and timing replace resource management. Weapons carry "extensive upgrade options", but the upgrade materials and progression trees have not been detailed.',
    sourceLabel: 'Steam + official site',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'Shell roster size',
    value:
      'Eight playable Shells in the full game. Three are named so far — Tiel, the Acolyte, who is the one you can find in the Open Beta, plus Eredrim, the Venerable and Proxima, the Broodseeker from the official gameplay reveal. Shells lie dormant in the world until you possess them and awaken their innate abilities; the remaining five, and where any of them are found, are unannounced.',
    sourceLabel: 'Steam Open Beta',
    sourceUrl: SITE.openBetaUrl,
  },
  {
    label: 'Open Beta scope',
    value:
      'The opening three hours: the Prologue through into the first explorable region of the open world. Inside it you can cleanse beacons, clear optional dungeons and fight hidden mini-bosses before the run ends against Magdalena, the Lady of the Woods. Cold Symmetry labelled it an in-development build, so its bugs and frame rate say nothing about the launch build.',
    sourceLabel: 'Steam Open Beta',
    sourceUrl: SITE.openBetaUrl,
  },
  {
    label: 'Open Beta carry-over',
    value:
      'Two things carry forward and nothing else. Playing the Beta unlocks The Flayed Harbinger, an exclusive cosmetic you claim in the full game at launch, and pushing past Marrow Keep unlocks the option to skip the Prologue. Everything else is wiped to preserve launch balance — currency, weapons, Shells and collectibles all reset, in the studio\'s own wording.',
    sourceLabel: 'Steam Open Beta',
    sourceUrl: SITE.openBetaUrl,
  },
  {
    label: 'Steam packages (USD)',
    value:
      'Base game ' +
      SITE.steamStandardPriceUsd +
      '; Devout Edition ' +
      SITE.steamDevoutPriceUsd +
      '. The $10 gap buys up to three days of early access plus eight Obsidian Shell Skins — cosmetics, not power. Regional pricing was announced alongside: €49.99 / £39.99 standard, €59.99 / £47.99 Devout. No physical or collector\'s edition has been announced.',
    sourceLabel: 'Steam full game',
    sourceUrl: SITE.fullGameUrl,
  },
  {
    label: 'PC minimum bar',
    value:
      'Windows 10/11, an Intel Core i7-10700K or Ryzen 5 3600, 16 GB RAM, an RTX 2060 SUPER 8 GB or RX 6600 8 GB, DirectX 12, and 70 GB of space. That is a steep climb from the 2020 game\'s Steam minimum of a GTX 970 and 8 GB RAM with no storage-type requirement at all. The SSD line is a hard requirement rather than a recommendation, so mechanical drives are out. Recommended specs are still blank on the full Steam listing.',
    sourceLabel: 'Steam full game',
    sourceUrl: SITE.fullGameUrl,
  },
];

export const OFFICIAL_LINKS = [
  { label: 'Steam full game', href: SITE.fullGameUrl },
  { label: 'Steam Open Beta', href: SITE.openBetaUrl },
  { label: 'Official site', href: SITE.officialSite },
  { label: 'Playstack announcement', href: SITE.playstackReleaseUrl },
] as const;
