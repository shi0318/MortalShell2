export interface Encounter {
  name: string;
  area: string;
  trigger: string;
  rewards: string;
  tips: string;
}

export const BOSS_REWARD_TYPES = [
  { name: 'Gloom', note: 'Main currency. Spend at Beacons. Drops on death and can be recovered.' },
  { name: 'Glimpse', note: 'Raises Shell Bond. Costs 1 to summon a Shell spirit in a boss arena.' },
  { name: 'Tarstone', note: 'Weapon or sidearm stone. Corrupted Gate bosses drop the matching weapon stone.' },
  { name: 'Ova', note: 'Story item. Gate dungeon bosses yield Ova at the arena Beacon. Enough unlocks The Unfound Path.' },
  { name: 'Unique gear', note: 'Some minibosses drop a weapon, sidearm, key, healing upgrade, or Shell unlock.' },
] as const;

export const STORY_BOSS: Encounter = {
  name: 'Tar Golem',
  area: 'Disciple\'s Grotto. From the Beacon, down the slope, white web launch to the high ledge, second launch into the stone-ruins arena. Be in Harros.',
  trigger: 'Interact with the torch at the far end of the arena.',
  rewards:
    'Achievements No, You Still Can\'t Win and Finish the Fight. After the cutscene, interact with Harros\'s stone form for Vartra\'s Seal (Harden). No regular gear.',
  tips: 'Scripted tutorial. Parry axe swings into Riposte. Red jump slam is unblockable — dodge sideways. Optional Tainted Vestige before the arena drops Burnt Effigy for fire resist. Drag it too long and the fight ends on its own.',
};

export const MINIBOSSES: Encounter[] = [
  {
    name: 'Bloodcursed Lithopod',
    area: 'Western Fainweald, coastal ravine SE of Gloomshade Grove Beacon. Downhill to the waterfall pool, behind the central rock.',
    trigger: 'Walk into the pool.',
    rewards: 'Citadel Gate Lever (Citadel of Penance main gate). Gloom.',
    tips: 'Stone crab. Hit the back. Dodge, do not block. Long recovery after swings.',
  },
  {
    name: 'Bor, the Deluded Monarch',
    area: 'Mammon, Abbey Entrance Beacon. Side path behind houses, coffin enemy, Strange Village Key, wooden gate, drop the hole.',
    trigger: 'Land in the arena.',
    rewards: 'Monarch\'s Vestige (Tarstone). Gloom.',
    tips: 'Slow giant axe. Dodge sideways. Lute can turn his adds on him.',
  },
  {
    name: 'Caged Grisha',
    area: 'Winterglass Lake Beacon dungeon (Mornefrost Grave). Middle path, iron gate.',
    trigger: 'Walk into the arena.',
    rewards: 'Warden\'s Stone, Fusillade Stone, Grisha Remnant. Gloom.',
    tips: 'Released from a cage. Separate from Pale / Strange / generic Grisha.',
  },
  {
    name: 'Gloombound Ritualist',
    area: 'Prologue, Village Outskirts in Disciple\'s Pass. After the Beacon, across the bridge, sunken arena.',
    trigger: 'Drop in.',
    rewards: 'Prologue progress. Gloom.',
    tips: 'Staff caster. Staff wave summons exploding Infested Wretches — kill those first. Parry or Harden for a burst window.',
  },
  {
    name: 'Gloombound Wraith',
    area: 'Northern Mammon, Forbidden Archives in the Gate of Infinity.',
    trigger: 'Grimorium Obscurum from the bookshelf top, slot it in the wall recess, push to the end.',
    rewards: 'Curseblood Stone. Gloom.',
    tips: 'Ghost-type. Moveset still thin in notes.',
  },
  {
    name: 'Great Arbiter of Flesh',
    area: 'Fainweald, SE of Widow\'s Overlook Beacon, open clearing toward Mushroom Village.',
    trigger: 'Walk into patrol range. Roaming.',
    rewards: 'Arbiter\'s Prize (Tarstone). Gloom and Glimpse. Gloombound Flame on the stele — take it to Marrow Keep\'s brazier for Night Mode.',
    tips: 'You can grab the Flame without killing him. Guard melee to stagger; dodge red attacks.',
  },
  {
    name: 'Grisha',
    area: 'Flooded Village, south of Blackridge Pass Beacon, follow torches to the end.',
    trigger: 'Walk into the arena.',
    rewards: 'Synaptic Vessel, Grisha Remnant. Gloom.',
    tips: 'Separate from Caged / Pale / Strange Grisha.',
  },
  {
    name: 'Infested Miner',
    area: 'Mammon, Burrowkin Dwelling after Gate of Mammon Beacon.',
    trigger: 'Large cavern chamber.',
    rewards: 'Wretchcaller\'s Stone. Gloom.',
    tips: 'Dual pickaxe. Ceiling rocks in lines. Lithopod adds. Lute can confuse the adds. Chip, do not trade.',
  },
  {
    name: 'Lucian, the Thirsting Knight',
    area: 'Hidden Keep near Stonebled Gate Beacon. Pressure plate, hidden passage, bridge, circular chamber.',
    trigger: 'Enter the circular chamber — the passage collapses.',
    rewards: 'Serpent Stone. Opens Stonebled Gate Beacon toward Sanguine Caverns.',
    tips: 'Two-phase. Weak to fire. Phase two he turns invisible and flees upstairs — chase the launch portal. Fire or poison mist reveals him.',
  },
  {
    name: 'Pale Grisha',
    area: 'NW Fainweald, Grisha Hunting Grounds. From One-Legged Wolf Beacon, NW past the red tree, cave elevator.',
    trigger: 'Walk into the arena.',
    rewards: 'Revered Gland, Grisha Remnant. Gloom.',
    tips: 'Manageable Grisha variant.',
  },
  {
    name: 'Prophet of Profane Infinities',
    area: 'Obsidianite Mine, SW of Outskirts of Mammon through Deserted Slums.',
    trigger: 'Big room after the elevator and platform drops.',
    rewards: 'Obsidian Hammer. Stop - Hammer Time.',
    tips: 'Slow hammer. Dodge the overhead. Wait out the two-hit chain. Red slam is unblockable. Riposte when staggered.',
  },
  {
    name: 'Sariel, the Endless',
    area: 'SE of The Silent Steps Beacon, large stone platform, then Chamber of Becoming.',
    trigger: 'Step on the platform, then the inner arena.',
    rewards: 'Sariel Shell, Clockwork Scythe, Like Clockwork.',
    tips: 'Second fight: smash four tombstones or he revives forever.',
  },
  {
    name: 'Sester Secundus',
    area: 'Revenant Graves, SE of Outskirts of Mammon. South toward Road of Absolution, Bone Gate, stone steps, Sester Censer.',
    trigger: 'Touch the red-glowing censer. Separate arena.',
    rewards: 'Sester\'s Censer. Give it to Genessa at Marrow Keep for her Shell.',
    tips: 'Nun melee. Eredrim Shoulder Bash staggers her into Ripostes. Not the same fight as The Silent Sester.',
  },
  {
    name: 'Slithering Corpseseeker',
    area: 'Hushed Sanctum in the Faded Citadel, from Citadel Annex Beacon. Bone Gate, elevator, Infested Stalker ride.',
    trigger: 'Land after the gap.',
    rewards: 'Chest with Stillblade\'s Stone. Gloom, Glimpse.',
    tips: 'Serpent / worm. Moveset still thin.',
  },
  {
    name: 'Solnir, the Gloom Seeker',
    area: 'Faded Citadel past Citadel Annex Beacon. Flooded arena with blue flame pillars.',
    trigger: 'Shoot the fire sources around the edge until the last flame dies.',
    rewards: 'Solnir Shard (sidearm Tarstone), Glimpse, Gloom.',
    tips: 'Fast dual-blade. Close in after combos. Doorway chip works. Do not snipe from range.',
  },
  {
    name: 'Starved Harridan',
    area: 'Vestige of Infinity, snowy ruin south of Castigator\'s Keep. Elevator by Hall of Murmurs.',
    trigger: 'Enter from the western Silent Steps route. Top-down entry can skip the spawn.',
    rewards: 'Voltaic Essence, Voltaic Amber.',
    tips: 'Airborne harpy. Punish landings. Killing her opens the left path.',
  },
  {
    name: 'Strange Grisha',
    area: 'Withered Shoals off the Faded Citadel route. Right-hand bone gate launches to a lone island.',
    trigger: 'Step through the bone gate.',
    rewards: 'Gloom, Grisha Remnant, Strange Remnant.',
    tips: 'Optional. Up-close melee hurts. Easier with a Tarforge-upgraded weapon.',
  },
  {
    name: 'Subjugated Guardian',
    area: 'Sentry\'s Grave in Lonesome Spire. NW from Gate of Mammon Beacon, clockwise interior, drop to the lowest level.',
    trigger: 'End arena.',
    rewards: 'Ballistazooka.',
    tips: 'Stay close so he slams instead of shooting. Clear Ballista Head enemies first.',
  },
  {
    name: 'Tainted Vestige',
    area: 'Hidden cave before Disciple\'s Grotto. Left-rear of the Beacon, wall crack, straight path.',
    trigger: 'Get close to the flame-like plant.',
    rewards: 'Burnt Effigy (fire resist — take it into Tar Golem). Gloom.',
    tips: 'Two hits then out. Red flash is a grab. Dodge sideways on the fire slam. Shock hurts it more than other statuses.',
  },
  {
    name: 'Tarblighted Stoner',
    area: 'Sanguine Caverns Gate.',
    trigger: 'Mandatory gate fight.',
    rewards: 'Tarred Fragment.',
    tips: 'Bigger Stoner. Summons Woodmen — keep adds clear.',
  },
  {
    name: 'The Wandering Shepherd',
    area: 'Sunken Village pasture, over the bridge in front of the Beacon.',
    trigger: 'Step into the pasture.',
    rewards: 'Sheephead Totem, Tarblighted Trophy, Gloom. Opens the path to Magdalena.',
    tips: 'Sheep respawn — do not clear the flock. Stay on the shepherd. At half health he becomes The Tarblighted Shepherd and can sheep-curse you. After 8/17 patch only light attacks Riposte.',
  },
  {
    name: 'The Tarblighted Shepherd',
    area: 'Same arena as The Wandering Shepherd.',
    trigger: 'Phase two at about half health. Not a separate spawn.',
    rewards: 'Settled with phase one.',
    tips: 'Sheep curse strips your moveset for a few seconds. Keep rolling. Some write-ups place a second copy near Mushroom Village — treat that as disputed.',
  },
  {
    name: 'The Warden',
    area: 'Citadel of Penance. Elevator from the Beacon to the lowest platform.',
    trigger: 'Interact with the coin pouch in the arena center.',
    rewards: 'Eredrim Shell.',
    tips: 'Flaming mace. Most combos are not blockable — roll the back. Red jumping series is dodge-only.',
  },
  {
    name: 'Tishina\'s Confessor',
    area: 'Prisoner\'s Domain from Slumwater Drain Beacon. Circular lift at the far end. Shortcut: break the marked wall near the giant statue.',
    trigger: 'Ride the lift into the arena.',
    rewards: 'Confessor\'s Keepsake (sidearm charge Tarstone). Gloom.',
    tips: 'Slow scythe, almost every swing parryable. Shock is the low resist. Save the charged shot for knockdown.',
  },
  {
    name: 'Urrig, the Executioner',
    area: 'Winterglass Lake in Conqueror\'s Domain from Sester\'s Gate. Ring two bells by the broken bridge.',
    trigger: 'Immaculate Crown first, then both bells, then the new path.',
    rewards: 'Warden\'s Stone for Great Martyr\'s Blade.',
    tips: 'Unblockable hammer plus Frost. Three-hit spin cannot be eaten. Below ~30% he curls and shoots more.',
  },
  {
    name: 'Vellen, High Lord of Mammon',
    area: 'West of High Lords Courtyard Beacon, Royal Crypt of Mammon, long corridor.',
    trigger: 'End of the corridor. Shell-unlock fight, not a trash miniboss.',
    rewards: 'Lazlo Shell — body in the room behind him.',
    tips: 'Long spear. Do not get greedy. Nearby enemies can be lured into him.',
  },
  {
    name: 'Viletongue Batushka',
    area: 'Castigator\'s Keep.',
    trigger: 'Wooden door, candle pile, drink the Strange Concoction.',
    rewards: 'Viletongue Hedron.',
    tips: 'Easy fight, but the drink dizzies the camera. Lever after the kill.',
  },
  {
    name: 'Vrago, Solikar Champion',
    area: 'Abandoned Shrine south of Citadel of Penance, after Nochtean Gate Beacon elevator.',
    trigger: 'Drop into the back-right pit. No backing out.',
    rewards: 'Voltaic Crown.',
    tips: 'Shield champion. First two hits of the three-hit string are parryable; the third is not.',
  },
  {
    name: 'Vrannic, the Grand Illusionist',
    area: 'Near Mushroom Village Gate Beacon, Hall of Illusions route.',
    trigger: 'Beacon arena. Opens the eastern Corrupted Gate into Glutted Mire.',
    rewards: 'Volatile Fragment.',
    tips: 'Sack on the back fires projectiles. Same three-hit rule: two parryable, third unblockable thrust.',
  },
  {
    name: 'The Silent Sester',
    area: 'Not mapped. Week 1 notes only mention a Proxima riposte alignment fix.',
    trigger: 'Unknown.',
    rewards: 'Unknown. Do not invent a drop.',
    tips: 'Real encounter, no public route. Not Sester Secundus and not Sariel.',
  },
];
