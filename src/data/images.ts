// Official media catalog for Mortal Shell II Wiki.
// Sources: Steam store screenshots + Cold Symmetry official page.
// Fan-site usage with attribution; not affiliated with Cold Symmetry / Playstack.

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
}

export const SITE_IMAGES = {
  heroBanner: {
    src: '/images/mortalshell2-hero-banner.webp',
    alt: 'Mortal Shell II player facing a bear-headed shaman enemy in a dark forest clearing',
    width: 1400,
    height: 787,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  heroCombat: {
    src: '/images/mortalshell2-rainy-path-combat.webp',
    alt: 'Mortal Shell II hooded warrior approaching an enemy through a rainy torch-lit village path',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  shellsPortrait: {
    src: '/images/mortalshell2-masked-shell-portrait.webp',
    alt: 'Mortal Shell II character portrait of a masked woman in red with gold jewelry',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  weaponsCloseup: {
    src: '/images/mortalshell2-shell-greatsword-closeup.webp',
    alt: 'Close-up of a pale Mortal Shell II warrior holding a greatsword over one shoulder',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  bossesCart: {
    src: '/images/mortalshell2-swamp-cart-boss.webp',
    alt: 'Large swamp boss creature sitting on a spiked cart in Mortal Shell II',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  bossesSpider: {
    src: '/images/mortalshell2-spider-boss-fight.webp',
    alt: 'Player fighting a multi-limbed spider-like boss among candles in Mortal Shell II',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  cathedralBoss: {
    src: '/images/mortalshell2-cathedral-guardian-boss.webp',
    alt: 'Player facing a massive crystal-crowned cathedral guardian boss in Mortal Shell II',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  mapVillage: {
    src: '/images/mortalshell2-village-accordion-npc.webp',
    alt: 'Mortal Shell II village scene with an old accordion player among wooden houses',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  mapSwamp: {
    src: '/images/mortalshell2-swamp-serpent-encounter.webp',
    alt: 'Player kneeling in swamp water before a large serpent-like creature in Mortal Shell II',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  gloomCreature: {
    src: '/images/mortalshell2-gloom-spider-creature.webp',
    alt: 'Gloom-wreathed spider-like creature emerging in a foggy swamp in Mortal Shell II',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  bearShaman: {
    src: '/images/mortalshell2-bear-shaman-encounter.webp',
    alt: 'Player confronting a tattooed bear-headed enemy with antlers in Mortal Shell II',
    width: 1600,
    height: 900,
    credit: 'Steam store screenshot | Mortal Shell II',
  },
  officialKeyart1: {
    src: '/images/mortalshell2-official-keyart-1.webp',
    alt: 'Official Mortal Shell II key art from Cold Symmetry',
    width: 1600,
    height: 900,
    credit: 'Official image | coldsymmetry.com/mortal-shell-2',
  },
  officialKeyart2: {
    src: '/images/mortalshell2-official-keyart-2.webp',
    alt: 'Official Mortal Shell II promotional art from Cold Symmetry',
    width: 1600,
    height: 900,
    credit: 'Official image | coldsymmetry.com/mortal-shell-2',
  },
  officialKeyart3: {
    src: '/images/mortalshell2-official-keyart-3.webp',
    alt: 'Official Mortal Shell II scene art from Cold Symmetry',
    width: 1600,
    height: 900,
    credit: 'Official image | coldsymmetry.com/mortal-shell-2',
  },
  officialKeyart4: {
    src: '/images/mortalshell2-official-keyart-4.webp',
    alt: 'Official Mortal Shell II environment art from Cold Symmetry',
    width: 1600,
    height: 900,
    credit: 'Official image | coldsymmetry.com/mortal-shell-2',
  },
  worldMapOverview: {
    src: '/images/mortalshell2-world-map-overview.webp',
    alt: 'Mortal Shell II world map overview showing interconnected regions in fog',
    width: 1800,
    height: 1800,
    credit: 'World map overview | fan-site documentation asset',
  },
  worldMapCover: {
    src: '/images/mortalshell2-world-map-cover.webp',
    alt: 'Mortal Shell II world map cover thumbnail',
    width: 1200,
    height: 1200,
    credit: 'World map overview | fan-site documentation asset',
  },
  officialKeyart5: {
    src: '/images/mortalshell2-official-keyart-5.webp',
    alt: 'Official Mortal Shell II combat art from Cold Symmetry',
    width: 1600,
    height: 900,
    credit: 'Official image | coldsymmetry.com/mortal-shell-2',
  },
} as const satisfies Record<string, SiteImage>;
