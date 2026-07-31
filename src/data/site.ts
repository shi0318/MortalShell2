// 站点全局常量 —— 单一数据源，避免各页面硬编码不一致
export const SITE = {
  name: 'Mortal Shell 2 Wiki',
  shortName: 'MS2 Wiki',
  url: 'https://mortalshell2.wiki',
  // Official full release date (Playstack + Steam full game page)
  releaseDate: '2026-08-20',
  tagline: 'Verified Pre-release Guides',
  description:
    'Independent Mortal Shell 2 wiki with source-tracked guides for Open Beta, release date, Shells, bosses, map, and systems. Every fact carries a confirmation status.',
  locale: 'en',
  developer: 'Cold Symmetry',
  publisher: 'Playstack',
  contactEmail: 'nmlkareem161@gmail.com',
  officialSite: 'https://mortalshell.com/',
  playstackReleaseUrl: 'https://www.playstack.com/news/mortal-shell-ii-release-date/',
  coldSymmetryUrl: 'https://www.coldsymmetry.com/mortal-shell-2',
  fullGameAppId: '2584270',
  fullGameUrl: 'https://store.steampowered.com/app/2584270/Mortal_Shell_II/',
  openBetaAppId: '4711740',
  openBetaUrl: 'https://store.steampowered.com/app/4711740/Mortal_Shell_II__Open_Beta/',
  openBetaDate: '2026-06-05',
  downloadPath: '/download/',
  platforms: ['Steam', 'PlayStation 5', 'Xbox Series X|S'] as const,
  fullGameShellCount: 8,
  steamStandardPriceUsd: '$49.99',
  steamDevoutPriceUsd: '$59.99',
  lastVerified: '2026-07-31',
} as const;

export const NAV = [
  { label: 'Guide', href: '/guide/' },
  { label: 'Shells', href: '/shells/' },
  { label: 'Weapons', href: '/weapons/' },
  { label: 'Bosses', href: '/bosses/' },
  { label: 'Map', href: '/map/' },
  { label: 'Download', href: '/download/' },
] as const;

export function isReleased(now: Date = new Date()): boolean {
  return now >= new Date(SITE.releaseDate + 'T00:00:00Z');
}

export function daysUntilRelease(now: Date = new Date()): number {
  const target = new Date(SITE.releaseDate + 'T00:00:00Z').getTime();
  const diff = target - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
