export interface LoadoutWeapon {
  slug: string | null;
  name: string;
  feel: string;
  location: string;
  achievement: string;
  image: string;
}

export const MELEE_WEAPONS: LoadoutWeapon[] = [
  {
    slug: null,
    name: 'The Iconoclast',
    feel: 'Light greatsword, all-rounder. Prologue starter.',
    location: 'Prologue. Talk to the Undermether, inhabit Harros — it is already in the inventory.',
    achievement: 'Counts toward Lord of War',
    image: '/images/weapons/iconoclast.jpg',
  },
  {
    slug: 'axe-and-dagger',
    name: 'Axe and Dagger',
    feel: 'Fast dual-wield. Dagger lights into an axe heavy.',
    location:
      'South of Mushroom Village Beacon. Illusion stone arch, Chapel Key off the statue rope, then Shrine of Trials (NW Grisha Hunter camp). Pressure plates, loot the Knight room.',
    achievement: 'Deep Cuts · Lord of War',
    image: '/images/weapons/axe-and-dagger.jpg',
  },
  {
    slug: 'veterans-battle-axe',
    name: "Veteran's Battle Axe",
    feel: 'Two-handed heavy axe. High stagger.',
    location:
      'Near Shattered Beacon / Blackridge Pass. Drop into The King\'s Crypt. Long hole, body or sarcophagus near an enemy.',
    achievement: 'Cut You Down to Size · Lord of War',
    image: '/images/weapons/veterans-battle-axe.jpg',
  },
  {
    slug: 'great-martyrs-blade',
    name: "Great Martyr's Blade",
    feel: 'Colossal greatsword with freeze.',
    location:
      'NE from Gloomshade Grove Beacon, outside Citadel of Penance walls: Martyr\'s Prison. Pouch on the stone counter teleports you in. Needs the Citadel key from Bloodcursed Lithopod.',
    achievement: 'Big Boi · Lord of War',
    image: '/images/weapons/great-martyrs-blade.jpg',
  },
  {
    slug: 'obsidian-hammer',
    name: 'Obsidian Hammer',
    feel: 'Blunt hammer. Shield-break.',
    location:
      'SW from Outskirts of Mammon, Abandoned Slums pit, Obsidianite Mines. Drops from Prophet of Profane Infinities.',
    achievement: 'Stop - Hammer Time · Lord of War',
    image: '/images/weapons/obsidian-hammer.jpg',
  },
  {
    slug: 'black-needle',
    name: 'Black Needle',
    feel: 'Long spear. Fast pokes.',
    location:
      'Sester\'s Gate (SE Corrupt Gate). Cleanse the Beacon, twin Sesters then Stray Sester. Drops on the kill.',
    achievement: 'Point Taken · Lord of War',
    image: '/images/weapons/black-needle.jpg',
  },
  {
    slug: 'axatana',
    name: 'Axatana',
    feel: 'Axe that switches into dual katanas.',
    location:
      'NE from The Silent Steps / Sester\'s Gate. Bone Gate to the tower near the SE Corrupt Gate. Button behind the tower, Dagger Sester, alcove loot.',
    achievement: 'Dual Wielding · Lord of War',
    image: '/images/weapons/axatana.jpg',
  },
  {
    slug: 'clockwork-scythe',
    name: 'Clockwork Scythe',
    feel: 'Wide mechanical scythe. Crowd control.',
    location:
      'SE from The Silent Steps. Beat Sariel on the platform to open Chamber of Becoming. Smash four glowing tombstones so he stays dead. Drops with the Sariel Shell.',
    achievement: 'Like Clockwork · Lord of War',
    image: '/images/weapons/clockwork-scythe.jpg',
  },
];

export const SIDEARMS: LoadoutWeapon[] = [
  {
    slug: null,
    name: 'Naylshotte',
    feel: 'Close shotgun interrupt.',
    location: 'Prologue with Harros and the Untarnished Seal. Automatic.',
    achievement: 'Guns. Lots of Guns',
    image: '/images/weapons/naylshotte.jpg',
  },
  {
    slug: 'forgotten-crossbow',
    name: 'Forgotten Crossbow',
    feel: 'Single-target pull shot.',
    location:
      'NW of Blackridge Pass Beacon, Flooded Village. Break the boarded arch, second elevator, Damp Key off a crate by the wrecked boat, central building table.',
    achievement: 'Old School · Guns. Lots of Guns',
    image: '/images/weapons/forgotten-crossbow.jpg',
  },
  {
    slug: 'troubador-s-lute',
    name: "Troubador's Lute",
    feel: 'Confusion. Enemies fight each other. Cannot be upgraded.',
    location:
      'One-Legged Wolf Tavern. Needs Mother\'s Breath (siphon 8 Ova) to clear the growths from Mushroom Village toward Hilga\'s house. Stage left of the lute player.',
    achievement: 'Guns. Lots of Guns',
    image: '/images/weapons/troubadors-lute.jpg',
  },
  {
    slug: 'salvaged-trebuchaxe',
    name: 'Salvaged Trebuchaxe',
    feel: 'Arcing explosive axes. Slow reload.',
    location:
      'South of Gloomshade Grove. Beat Bloodcursed Lithopod for the Citadel lever, then Ravaged Hideout next door. Loot the body at the end.',
    achievement: 'Chop Chop · Guns. Lots of Guns',
    image: '/images/weapons/salvaged-trebuchaxe.jpg',
  },
  {
    slug: 'ballistazooka',
    name: 'Ballistazooka',
    feel: 'Shoulder ballista. Pins and knocks down.',
    location:
      'NW of Gate of Mammon Beacon, Sentry\'s Grave. Beat Subjugated Guardian at the bottom.',
    achievement: 'Speared · Guns. Lots of Guns',
    image: '/images/weapons/ballistazooka.jpg',
  },
  {
    slug: 'triarch-repeater',
    name: 'Triarch Repeater',
    feel: 'Three-barrel pressure. Resolve-gated fire.',
    location:
      'Blackwell Cavern north of Castigator\'s Keep. Wooden elevator, cliff edge, lift, break the barricade. On the ground in the first lit fog room. No boss.',
    achievement: 'Old Painless · Guns. Lots of Guns',
    image: '/images/weapons/triarch-repeater.jpg',
  },
  {
    slug: 'cursed-child',
    name: 'Cursed Child',
    feel: 'Lifedrain channel. Execution heals a little.',
    location:
      'Revered Beacon from Sester\'s Gate. NW stairs, western platform, Bone Gate, north past the hammer enemy. Destroy the central light pillar, then loot.',
    achievement: 'Beautiful Baby · Guns. Lots of Guns',
    image: '/images/weapons/cursed-child.jpg',
  },
  {
    slug: 'caged-hystrix',
    name: 'Caged Hystrix',
    feel: 'Tracking poison spikes.',
    location:
      'Chamber of Becoming after Sariel. Do not fast-travel out — back stairs near the exit.',
    achievement: 'Spiked · Guns. Lots of Guns',
    image: '/images/weapons/caged-hystrix.jpg',
  },
];

export const UPGRADE_LADDER = [
  { level: '+1', damage: '105%', material: 'Ventrium x2', coins: '100' },
  { level: '+2', damage: '110%', material: 'Ventrium x2', coins: '100' },
  { level: '+3', damage: '115%', material: 'Ventrium x4', coins: '300' },
  { level: '+4', damage: '120%', material: 'Ventrium x9', coins: '500' },
  { level: '+5', damage: '125%', material: 'Ventrium x13', coins: '1,000' },
  { level: '+6', damage: '130%', material: 'Ventrium x18', coins: '1,250' },
  { level: '+7', damage: '135%', material: 'Laterite x2', coins: '2,750' },
  { level: '+8', damage: '140%', material: 'Laterite x4', coins: '2,750' },
  { level: '+9', damage: '145%', material: 'Laterite x9', coins: '3,500' },
  { level: '+10', damage: '150%', material: 'Laterite x13', coins: '4,250' },
  { level: '+11', damage: '155%', material: 'Laterite x18', coins: '5,000' },
  { level: '+12', damage: '160%', material: 'Dorsalite x2', coins: '5,750' },
  { level: '+13', damage: '165%', material: 'Dorsalite x4', coins: '6,500' },
  { level: '+14', damage: '170%', material: 'Dorsalite x9', coins: '7,250' },
  { level: '+15', damage: '175%', material: 'Dorsalite x13', coins: '8,000' },
  { level: '+16', damage: '180%', material: 'Dorsalite x18', coins: '8,750' },
] as const;

export const MELEE_TIERS = [
  { tier: 'S', name: 'Axatana', why: 'Fast dual-wield plus a heavy axe. Most lists put it here.' },
  { tier: 'S', name: 'Black Needle', why: 'Long, safe pokes. Consistent in boss fights.' },
  { tier: 'A', name: 'Axe and Dagger', why: 'Early fast weapon. Same niche as Axatana, weaker later.' },
  { tier: 'A', name: "Veteran's Battle Axe", why: 'Best heavy for stagger. Some runs find it already +4.' },
  { tier: 'A', name: 'The Iconoclast', why: 'Safest first playthrough sword. No peak, no hole.' },
  { tier: 'B', name: 'Clockwork Scythe', why: 'Group sweeps. Recovery is long against fast bosses.' },
  { tier: 'B', name: "Great Martyr's Blade", why: 'Reach and freeze. Slow startups.' },
  { tier: 'C', name: 'Obsidian Hammer', why: 'Huge blunt hits, slowest moveset. Veteran\'s Axe is the friendlier heavy.' },
] as const;

export const SIDEARM_TIERS = [
  { tier: 'S', name: 'Triarch Repeater', why: 'Sustained fire. High ceiling with a DoT Tarstone.' },
  { tier: 'S', name: "Troubador's Lute", why: 'Confusion is unique. Cannot be upgraded.' },
  { tier: 'S', name: 'Ballistazooka', why: 'Highest single-shot burst. Long recovery.' },
  { tier: 'A', name: 'Forgotten Crossbow', why: 'Early precise pull. Cheap power spike.' },
  { tier: 'A', name: 'Cursed Child', why: 'Sustain and execution heal.' },
  { tier: 'A', name: 'Caged Hystrix', why: 'Tracking poison. Needs the right Tarstone.' },
  { tier: 'B', name: 'Naylshotte', why: 'Starter shotgun. Replaced once you have a specialist.' },
  { tier: 'B', name: 'Salvaged Trebuchaxe', why: 'Splash throw. Reload is too slow in melee.' },
] as const;
