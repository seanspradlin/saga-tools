import { Ability } from './abilities';
/**
 * Sourced from the Saga Fandom Wiki
 * https://saga.fandom.com/wiki/List_of_SaGa_Scarlet_Grace_roles
 */

export type RoleType =
	| 'character'
	| 'attack'
	| 'positioning'
	| 'accuracy'
	| 'bpBoosting'
	| 'resistance'
	| 'shield'
	| 'targeting'
	| 'delay'
	| 'ailmentResistance'
	| 'statusBoosting'
	| 'attributeBoosting'
	| 'benison'
	| 'misc';
export interface RoleData {
	id: string;
	role: string;
	description: string;
	type: RoleType;
}

export interface CharacterRole extends RoleData {
	character: string;
	notes?: string;
	type: 'character';
}

export interface LearnableRole extends RoleData {
	requiredTechs: string[];
	type:
		| 'attack'
		| 'positioning'
		| 'accuracy'
		| 'bpBoosting'
		| 'resistance'
		| 'shield'
		| 'targeting'
		| 'delay'
		| 'ailmentResistance'
		| 'statusBoosting'
		| 'attributeBoosting'
		| 'benison'
		| 'misc';
}

export const characterRoles: CharacterRole[] = [
	{
		type: 'character',
		id: 'novice-duelist',
		character: 'Urpina',
		role: 'Novice Duelist',
		description: 'Enables dual wield / Attack damage up (M)',
		notes: 'Unlocked by completing Marchiam Ria sidequest'
	},
	{
		type: 'character',
		id: 'seasoned-duelist',
		character: 'Antonius',
		role: 'Seasoned Duelist',
		description: 'Enables dual wield / Slash damage up (L)'
	},
	{
		type: 'character',
		id: 'wizened-duelist',
		character: 'Maximus',
		role: 'Wizened Duelist',
		description: 'Enables dual wield / Weapon block rate up (M)'
	},
	{
		type: 'character',
		id: 'maidenblade',
		character: 'Urpina',
		role: 'Maidenblade',
		description: 'Attack damage up (M)'
	},
	{
		type: 'character',
		id: 'first-striker',
		character: 'Kumi',
		role: 'First Striker',
		description: 'Physical-attack damage up (S) / Initial position up (S)'
	},
	{
		type: 'character',
		id: 'astute-lass',
		character: 'Elisabeth',
		role: 'Astute Lass',
		description: 'Physical-attack damage up (M) / Chance to be targeted down (S)'
	},
	{
		type: 'character',
		id: 'oppressor',
		character: 'Ogniana',
		role: 'Oppressor',
		description: 'Physical-attack damage up (L) / Chance to be blocked/evaded up (M)'
	},
	{
		type: 'character',
		id: 'stalwart',
		character: 'Chiago Lisboa',
		role: 'Stalwart',
		description: 'Physical-attack damage up (XL) / HP down (L)'
	},
	{
		type: 'character',
		id: 'spiritualist',
		character: 'Sasha',
		role: 'Spiritualist',
		description: 'Elemental damage up (XL) / HP down (L)'
	},
	{
		type: 'character',
		id: 'scimitar-expert',
		character: 'Compass',
		role: 'Scimitar Expert',
		description: 'Slash damage up (XL)'
	},
	{
		type: 'character',
		id: 'crusher',
		character: 'Tomato',
		role: 'Crusher',
		description: 'Blunt damage up (XL)'
	},
	{
		type: 'character',
		id: 'heart-attacker',
		character: 'Queen',
		role: 'Heart Attacker',
		description: 'Pierce damage up (XL)'
	},
	{
		type: 'character',
		id: 'captain',
		character: 'Angle',
		role: 'Captain',
		description: 'Ally attack damage up (S) / Chance to be targeted up (S)'
	},
	{
		type: 'character',
		id: 'scout',
		character: 'Nessa',
		role: 'Scout',
		description: 'Initial position up (S) / Mobility up (M)'
	},
	{
		type: 'character',
		id: 'first-responder',
		character: 'Isaac',
		role: 'First Responder',
		description: 'Initial position up (S) / Acuity up (M)'
	},
	{
		type: 'character',
		id: 'tracker',
		character: 'Julia',
		role: 'Tracker',
		description: 'Initial position up (M)'
	},
	{
		type: 'character',
		id: 'birdman',
		character: 'Orville',
		role: 'Birdman',
		description: 'Initial position up (M) / Delay effects up (M)'
	},
	{
		type: 'character',
		id: 'cannonball',
		character: 'Leonard',
		role: 'Cannonball',
		description: 'Initial position up (L) / Chance to be targeted up (M)'
	},
	{
		type: 'character',
		id: 'executioner',
		character: 'Balmaint',
		role: 'Executioner',
		description: 'Chance to be blocked/evaded down (S) / Sudden death resistance up (M)'
	},
	{
		type: 'character',
		id: 'the-vigilant',
		character: 'Hongswan',
		role: 'The Vigilant',
		description: 'Chance to be blocked/evaded down (M) / Speed down (M)'
	},
	{
		type: 'character',
		id: 'raider',
		character: 'Zigor',
		role: 'Raider',
		description: 'Chance to be blocked/evaded down (M) / All resistances down (M)'
	},
	{
		type: 'character',
		id: 'leader',
		character: 'Adill',
		role: 'Leader',
		description: 'Initial BP up (M) / Max BP down (L)'
	},
	{
		type: 'character',
		id: 'helmsman',
		character: 'Yohman',
		role: 'Helmsman',
		description: 'Max BP up (M) / All resistances down (S)'
	},
	{
		type: 'character',
		id: 'the-indecisive',
		character: 'Erreich',
		role: 'The Indecisive',
		description: 'Max BP up (L) / Initial BP down (M)'
	},
	{
		type: 'character',
		id: 'instructor',
		character: 'Griffin',
		role: 'Instructor',
		description: "Raises allies' skill levels to match your own / Disables shield blocking"
	},
	{
		type: 'character',
		id: 'the-invincible',
		character: 'Arthur Dalton',
		role: 'The Invincible',
		description: 'All resistances up (S) / Attack damage up (S)'
	},
	{
		type: 'character',
		id: 'queensguard',
		character: 'Beatrice',
		role: 'Queensguard',
		description: 'All resistances up (S) / Chance to be targeted up (S)'
	},
	{
		type: 'character',
		id: 'vanguard',
		character: 'Snail',
		role: 'Vanguard',
		description: 'All resistances up (M) / Initial position down (M)'
	},
	{
		type: 'character',
		id: 'the-selfish',
		character: 'Strumiknen',
		role: 'The Selfish',
		description: 'All resistances up (L) / Ally attack damage down (M)'
	},
	{
		type: 'character',
		id: 'second-level-clerk',
		character: 'Luna',
		role: 'Second-Level Clerk',
		description: 'All ally resistances up (S) / Attack damage down (M)'
	},
	{
		type: 'character',
		id: 'backliner',
		character: 'Victoria',
		role: 'Backliner',
		description: 'All ally resistances up (M) / Attack damage down (L)'
	},
	{
		type: 'character',
		id: 'tactician',
		character: 'Roh Sung',
		role: 'Tactician',
		description: 'All ally resistances up (M) / Max BP down (M)'
	},
	{
		type: 'character',
		id: 'guardsman',
		character: 'Jamto',
		role: 'Guardsman',
		description: 'Weapon block rate up (M) / Chance to be targeted up (S)'
	},
	{
		type: 'character',
		id: 'immovable-object',
		character: 'Irene',
		role: 'Immovable Object',
		description: 'Shield block rate up (M) / Defense up (S)'
	},
	{
		type: 'character',
		id: 'the-popular',
		character: 'Elysed',
		role: 'The Popular',
		description: 'Chance to be targeted down (S) / Sleep resistance up (M)'
	},
	{
		type: 'character',
		id: 'covert-ops',
		character: 'Taria',
		role: 'Covert Ops',
		description: 'Chance to be targeted down (M)'
	},
	{
		type: 'character',
		id: 'good-for-nothing',
		character: 'Nasir',
		role: 'Good-for-Nothing',
		description: 'Chance to be targeted down (M)'
	},
	{
		type: 'character',
		id: 'the-charismatic',
		character: 'Paul',
		role: 'The Charismatic',
		description: 'Chance to be targeted down (M)'
	},
	{
		type: 'character',
		id: 'scallywag',
		character: 'Raphael',
		role: 'Scallywag',
		description: 'Chance to be targeted up (S) / Speed up (S)'
	},
	{
		type: 'character',
		id: 'grand-protector',
		character: 'Gabriel',
		role: 'Grand Protector',
		description: 'Chance to be targeted up (M) / HP up (M)'
	},
	{
		type: 'character',
		id: 'guardian',
		character: 'Robert',
		role: 'Guardian',
		description: 'Chance to be targeted up (M) / Endurance up (M)'
	},
	{
		type: 'character',
		id: 'provocateur',
		character: 'House',
		role: 'Provocateur',
		description: 'Chance to be targeted up (M) / Dexterity up (M)'
	},
	{
		type: 'character',
		id: 'the-overbearing',
		character: 'Marion',
		role: 'The Overbearing',
		description: 'Chance to be targeted up (M) / Intelligence up (M)'
	},
	{
		type: 'character',
		id: 'contrarian',
		character: 'Casper',
		role: 'Contrarian',
		description: 'Chance to be targeted up (L)'
	},
	{
		type: 'character',
		id: 'the-war-torn',
		character: 'Aslana Melek',
		role: 'The War-Torn',
		description: 'Delay effects up (L)'
	},
	{
		type: 'character',
		id: 'trickster',
		character: 'Cecilia',
		role: 'Trickster',
		description: 'Paralysis recovery up (M) / Paralysis resistance up (M)'
	},
	{
		type: 'character',
		id: 'normi-warrior',
		character: 'Kenji',
		role: 'Normi Warrior',
		description: 'Paralysis recovery up (L) / Defense up (S)'
	},
	{
		type: 'character',
		id: 'thug',
		character: 'Rico',
		role: 'Thug',
		description: 'Poison recovery up (M) / Poison resistance up (M)'
	},
	{
		type: 'character',
		id: 'the-unflinching',
		character: 'Mondo',
		role: 'The Unflinching',
		description: 'Poison recovery up (L) / Chance to be targeted up (M)'
	},
	{
		type: 'character',
		id: 'the-ill-fate',
		character: 'Hagar',
		role: 'The Ill-Fate',
		description: 'Sleep recovery up (M) / Sleep resistance up (M)'
	},
	{
		type: 'character',
		id: 'hard-worker',
		character: 'Clover',
		role: 'Hard Worker',
		description: 'Sleep recovery up (L) / Strength up (M)'
	},
	{
		type: 'character',
		id: 'realist',
		character: 'Lady',
		role: 'Realist',
		description: 'Confusion recovery up (M) / Confusion resistance up (M)'
	},
	{
		type: 'character',
		id: 'the-collected',
		character: 'Patricia',
		role: 'The Collected',
		description: 'Confusion/frenzy recovery up (L)'
	},
	{
		type: 'character',
		id: 'the-hearty',
		character: 'Lewis Darling',
		role: 'The Hearty',
		description: 'Poison/confusion/sudden death resistance up (M)'
	},
	{
		type: 'character',
		id: 'explorer',
		character: 'Francis',
		role: 'Explorer',
		description: 'Paralysis/sleep/stun resistance up (M)'
	},
	{
		type: 'character',
		id: 'the-shrewd',
		character: 'Solon',
		role: 'The Shrewd',
		description: 'Paralysis/stun resistance up (M)'
	},
	{
		type: 'character',
		id: 'breadwinner',
		character: 'Kahn',
		role: 'Breadwinner',
		description: 'Poison/sudden death resistance up (M)'
	},
	{
		type: 'character',
		id: 'sorceress',
		character: 'Kreisa',
		role: 'Sorceress',
		description: 'Sudden death resistance up (M) / Focus up (S)'
	},
	{
		type: 'character',
		id: 'hunter',
		character: 'Tissisaaq',
		role: 'Hunter',
		description: 'Initial position up (S) / Speed up (S)'
	},
	{
		type: 'character',
		id: 'arch-witch',
		character: 'Arch Witch',
		role: 'Arch Witch',
		description: 'Focus up (M)'
	},
	{
		type: 'character',
		id: 'the-courageous',
		character: 'Lamar',
		role: 'The Courageous',
		description: 'Strength up (M) / Acuity up (M)'
	},
	{
		type: 'character',
		id: 'vixen',
		character: 'Guinevere',
		role: 'Vixen',
		description: 'Dexterity up (M) / Intelligence up (M)'
	},
	{
		type: 'character',
		id: 'servant',
		character: 'Jerome',
		role: 'Servant',
		description: 'Mobility up (M) / Endurance up (M)'
	},
	{
		type: 'character',
		id: 'noble',
		character: 'Lord Stabiae',
		role: 'Noble',
		description: "Increases frequency of Shaams's Adjudication"
	},
	{
		type: 'character',
		id: 'fisherman',
		character: 'Socrates',
		role: 'Fisherman',
		description: "Increases frequency of Diemazu's Lamentation"
	},
	{
		type: 'character',
		id: 'disciple',
		character: 'Hilda',
		role: 'Disciple',
		description: "Increases frequency of Marigan's Mania"
	},
	{
		type: 'character',
		id: 'master',
		character: 'Ignatius',
		role: 'Master',
		description: "Increases frequency of Tejedura's Embrace"
	},
	{
		type: 'character',
		id: 'ascetic',
		character: 'Mirane',
		role: 'Ascetic',
		description: "Increases frequency of Astel's Mercy"
	},
	{
		type: 'character',
		id: 'herbalist',
		character: 'Colleen',
		role: 'Herbalist',
		description: "Increases frequency of Kada's Comfort"
	},
	{
		type: 'character',
		id: 'goldsmiths-daughter',
		character: 'Chichi',
		role: "Goldsmith's Daughter",
		description: "Increases frequency of Adamas's Strength"
	},
	{
		type: 'character',
		id: 'mayor',
		character: 'Muiredach',
		role: 'Mayor',
		description: "Increases frequency of Imhokiel's Fortification"
	},
	{
		type: 'character',
		id: 'shepherd',
		character: 'Nolan',
		role: 'Shepherd',
		description: "Increases frequency of Tukuz's Swiftness"
	},
	{
		type: 'character',
		id: 'merchant',
		character: 'Keegan',
		role: 'Merchant',
		description: "Increases frequency of Bartlett's Stratagem"
	},
	{
		type: 'character',
		id: 'magician',
		character: 'Nemain',
		role: 'Magician',
		description: "Increases frequency of Macha's Brilliance"
	},
	{
		type: 'character',
		id: 'dancer',
		character: 'Giselle',
		role: 'Dancer',
		description: "Increases frequency of Uzume's Inspiration"
	},
	{
		type: 'character',
		id: 'freewheeler',
		character: 'Sabit',
		role: 'Freewheeler',
		description: 'Ailment recovery up (S) / Initial position down (M)'
	},
	{
		type: 'character',
		id: 'purger',
		character: 'Tsubaki',
		role: 'Purger',
		description: 'Ally elemental resistances up (M)'
	}
];

export const learnableRoles: LearnableRole[] = [
	{
		type: 'attack',
		id: 'champion-duelist',
		role: 'Champion Duelist',
		description: 'Enables dual wield / Initial position up (M)',
		requiredTechs: [
			'heaven-and-earth',
			'crystalline-carve',
			'flowing-slash',
			'arm-of-light',
			'enkindle'
		]
	},
	{
		type: 'attack',
		id: 'breaker',
		role: 'Breaker',
		description: 'Attack damage up (M) / Chance to be targeted down (S)',
		requiredTechs: ['nutcracker', 'cruncher']
	},
	{
		type: 'attack',
		id: 'dominator',
		role: 'Dominator',
		description: 'Attack damage up (L) / Initial BP down (M)',
		requiredTechs: ['hell-s-fury', 'grand-slam']
	},
	{
		type: 'attack',
		id: 'the-forceful',
		role: 'The Forceful',
		description: 'Attack damage up (L) / All resistances down (L)',
		requiredTechs: ['wheel-swing', 'thunder-kick', 'sonic-blade', 'bonecrusher']
	},
	{
		type: 'attack',
		id: 'ace-in-the-hole',
		role: 'Ace in the Hole',
		description: 'Attack damage up (L) / All ally resistances down (M)',
		requiredTechs: ['downswing', 'hyper-hammer', 'aim', 'falling-phoenix']
	},
	{
		type: 'attack',
		id: 'braveheart',
		role: 'Braveheart',
		description: 'Physical-attack damage up (M)',
		requiredTechs: ['downswing', 'rapid-volley']
	},
	{
		type: 'attack',
		id: 'berserker',
		role: 'Berserker',
		description: 'Physical-attack damage up (L) / Block and evasion rate down (L)',
		requiredTechs: ['triple-thrust', 'spiral-charge', 'smash-axe']
	},
	{
		type: 'attack',
		id: 'finisher',
		role: 'Finisher',
		description: 'Physical-attack damage up (L) / Initial position down (L)',
		requiredTechs: ['hyper-hammer', 'matador']
	},
	{
		type: 'attack',
		id: 'strategist',
		role: 'Strategist',
		description: 'Physical-attack damage up (L) / Chance to be targeted up (M)',
		requiredTechs: ['multi-way', 'downswing', 'submission', 'rapid-volley', 'reaper']
	},
	{
		type: 'attack',
		id: 'elementalist',
		role: 'Elementalist',
		description: 'Elemental damage up (M)',
		requiredTechs: ['call-lightning', 'siren']
	},
	{
		type: 'attack',
		id: 'eternal-student',
		role: 'Eternal Student',
		description: 'Elemental damage up (L) / Elemental resistances down (M)',
		requiredTechs: ['wildfire', 'poisonous-mist']
	},
	{
		type: 'attack',
		id: 'supporter',
		role: 'Supporter',
		description: 'Ally attack damage up (M) / All resistances down (L)',
		requiredTechs: ['power-disruptor', 'enkindle', 'thunder-kick', 'quick-nock', 'sweep']
	},
	{
		type: 'attack',
		id: 'promoter',
		role: 'Promoter',
		description: 'Ally physical-attack damage up (S) / Max BP down (M)',
		requiredTechs: ['rain-of-arrows', 'block']
	},
	{
		type: 'positioning',
		id: 'the-nimble',
		role: 'The Nimble',
		description: 'Initial position up (M)',
		requiredTechs: ['brusque-slice', 'sweep']
	},
	{
		type: 'positioning',
		id: 'quickshot',
		role: 'Quickshot',
		description: 'Initial position up (L) / All resistances down (S)',
		requiredTechs: ['sonic-blade', 'rising-nova', 'demilune']
	},
	{
		type: 'positioning',
		id: 'rival',
		role: 'Rival',
		description: 'Initial position up (L) / Chance to be targeted up (M)',
		requiredTechs: ['thunder-kick', 'bonecrusher']
	},
	{
		type: 'accuracy',
		id: 'sniper',
		role: 'Sniper',
		description: 'Chance to be blocked/evaded down (S)',
		requiredTechs: ['aim', 'gale-strike']
	},
	{
		type: 'accuracy',
		id: 'sharpshooter',
		role: 'Sharpshooter',
		description: 'Chance to be blocked/evaded down (M) / Initial position down (M)',
		requiredTechs: ['id-break', 'lightspeed', 'sonic-blade']
	},
	{
		type: 'accuracy',
		id: 'sweeper',
		role: 'Sweeper',
		description: 'Chance to be blocked/evaded down (M) / Attack damage down (S)',
		requiredTechs: ['maim', 'slide']
	},
	{
		type: 'bpBoosting',
		id: 'commander',
		role: 'Commander',
		description: 'Initial BP up (M) / Ally attack power down (M)',
		requiredTechs: ['shiversmash', 'rain-of-arrows', 'split-cranium', 'raksha']
	},
	{
		type: 'bpBoosting',
		id: 'bullrusher',
		role: 'Bullrusher',
		description: 'Initial BP up (M) / All ally resistances down (M)',
		requiredTechs: ['vertical-smash', 'flowing-slash', 'dual-cross-cut', 'piercing-lightning']
	},
	{
		type: 'bpBoosting',
		id: 'comandante',
		role: 'Comandante',
		description: 'Max BP up (M) / Attack power down (S)',
		requiredTechs: ['golden-note', 'wheel-swing']
	},
	{
		type: 'bpBoosting',
		id: 'diverter',
		role: 'Diverter',
		description: 'Max BP up (M) / Chance to be targeted up (M)',
		requiredTechs: ['incendiary-arrow', 'demilune']
	},
	{
		type: 'resistance',
		id: 'iron-wall',
		role: 'Iron Wall',
		description: 'All resistances up (M)',
		requiredTechs: ['jolt-counter', 'optical-slash']
	},
	{
		type: 'resistance',
		id: 'the-forceful-resistance',
		role: 'The Forceful',
		description: 'Physical resistances up (M) / Physical-attack damage up (S)',
		requiredTechs: ['power-disruptor', 'hell-s-fury', 'dimensional-break']
	},
	{
		type: 'resistance',
		id: 'meat-shield',
		role: 'Meat Shield',
		description: 'Physical resistances up (L)',
		requiredTechs: ['jolt-counter', 'matador']
	},
	{
		type: 'resistance',
		id: 'warder',
		role: 'Warder',
		description: 'Elemental resistances up (M) / Elemental damage up (S)',
		requiredTechs: ['windmill', 'deflect']
	},
	{
		type: 'resistance',
		id: 'mentalist',
		role: 'Mentalist',
		description: 'Elemental resistances up (L)',
		requiredTechs: ['dimensional-break', 'shadow-weave']
	},
	{
		type: 'resistance',
		id: 'maestro-of-slashing',
		role: 'Maestro of Slashing',
		description: 'Slash resistance up (L) / Slash damage up (L)',
		requiredTechs: ['thousand-blades', 'gravedigger', 'maim']
	},
	{
		type: 'resistance',
		id: 'maestro-of-smashing',
		role: 'Maestro of Smashing',
		description: 'Blunt resistance up (L) / Blunt damage up (L)',
		requiredTechs: ['submission', 'hyper-hammer', 'seismic-strike']
	},
	{
		type: 'resistance',
		id: 'maestro-of-piercing',
		role: 'Maestro of Piercing',
		description: 'Pierce resistance up (L) / Pierce damage up (L)',
		requiredTechs: ['aim', 'golden-note', 'quick-nock']
	},
	{
		type: 'resistance',
		id: 'maestro-of-flame',
		role: 'Maestro of Flame',
		description: 'Heat resistance up (L) / Heat damage up (L)',
		requiredTechs: ['incendiary-arrow', 'rising-nova']
	},
	{
		type: 'resistance',
		id: 'maestro-of-ice',
		role: 'Maestro of Ice',
		description: 'Cold resistance up (L) / Cold damage up (L)',
		requiredTechs: ['shiversmash', 'crystalline-carve']
	},
	{
		type: 'resistance',
		id: 'maestro-of-lightning',
		role: 'Maestro of Lightning',
		description: 'Shock resistance up (L) / Shock damage up (L)',
		requiredTechs: ['demilune', 'piercing-lightning']
	},
	{
		type: 'resistance',
		id: 'lookout',
		role: 'Lookout',
		description: 'All ally resistances up (S) / All attributes down (M)',
		requiredTechs: ['thousand-blades', 'gale-strike', 'shadow-reversal', 'hell-s-fury', 'matador']
	},
	{
		type: 'resistance',
		id: 'barrier',
		role: 'Barrier',
		description: 'All ally resistances and damage up (S) / Max BP down (L)',
		requiredTechs: ['shelter', 'armor-blessing']
	},
	{
		type: 'shield',
		id: 'riposter',
		role: 'Riposter',
		description: 'Block rate up (M) / Chance to be targeted up (M)',
		requiredTechs: ['rampart', 'block', 'deflect']
	},
	{
		type: 'shield',
		id: 'the-wondrous',
		role: 'The Wondrous',
		description: 'Block rate up (M) / Mobility up (M) / Attack damage up (S)',
		requiredTechs: ['eulogy', 'power-surge']
	},
	{
		type: 'shield',
		id: 'the-immortal',
		role: 'The Immortal',
		description: 'Block rate up (M) / Strength up (M) / Attack damage up (S)',
		requiredTechs: ['headwind-rush', 'triumvirate']
	},
	{
		type: 'shield',
		id: 'defender',
		role: 'Defender',
		description: 'Evasion and weapon block rate up (L)',
		requiredTechs: ['deflect', 'apathy']
	},
	{
		type: 'shield',
		id: 'shield-master',
		role: 'Shield Master',
		description: 'Shield block rate up (L)',
		requiredTechs: ['block', 'matador']
	},
	{
		type: 'targeting',
		id: 'ambusher',
		role: 'Ambusher',
		description: 'Chance to be targeted down (M) / Max BP down (M)',
		requiredTechs: ['halting-blade', 'mesmerize']
	},
	{
		type: 'targeting',
		id: 'the-wise',
		role: 'The Wise',
		description: 'Chance to be targeted down (M) / Acuity up (M)',
		requiredTechs: ['rising-sun', 'plasma-shot']
	},
	{
		type: 'targeting',
		id: 'the-erudite',
		role: 'The Erudite',
		description: 'Chance to be targeted down (M) / Intelligence up (M)',
		requiredTechs: ['shattered-dreams', 'sleep']
	},
	{
		type: 'targeting',
		id: 'the-clever',
		role: 'The Clever',
		description: 'Chance to be targeted up (M) / Dexterity up (M)',
		requiredTechs: ['blizzard', 'lunar-blade', 'eclipse']
	},
	{
		type: 'targeting',
		id: 'the-strong',
		role: 'The Strong',
		description: 'Chance to be targeted up (M) / Endurance up (M)',
		requiredTechs: ['rock-splitter', 'retribution']
	},
	{
		type: 'targeting',
		id: 'decoy',
		role: 'Decoy',
		description: 'Chance to be targeted up (L)',
		requiredTechs: ['seismic-strike', 'chop', 'smash-axe', 'windmill']
	},
	{
		type: 'delay',
		id: 'the-discordant',
		role: 'The Discordant',
		description: 'Delay effects up (M)',
		requiredTechs: ['brusque-slice', 'hyper-hammer']
	},
	{
		type: 'delay',
		id: 'astonisher',
		role: 'Astonisher',
		description: 'Delay effects up (XL) / Initial position down (M)',
		requiredTechs: ['restoration', 'unbridled-frenzy']
	},
	{
		type: 'ailmentResistance',
		id: 'the-unrelenting',
		role: 'The Unrelenting',
		description: 'Sleep/confusion/frenzy recovery up (M)',
		requiredTechs: ['mesmerize', 'id-break', 'crystalline-carve']
	},
	{
		type: 'ailmentResistance',
		id: 'geomancer',
		role: 'Geomancer',
		description: 'Paralysis/poison recovery up (M)',
		requiredTechs: ['shadow-weave', 'shocking-rush', 'apid-venom', 'mizuchi']
	},
	{
		type: 'ailmentResistance',
		id: 'banisher',
		role: 'Banisher',
		description: 'Paralysis/poison/sleep/confusion resistance up (S)',
		requiredTechs: ['rosario-impale', 'southern-cross']
	},
	{
		type: 'ailmentResistance',
		id: 'the-steelblood',
		role: 'The Steelblood',
		description: 'Paralysis/poison/stun resistance up (M)',
		requiredTechs: ['shadow-reversal', 'shocking-rush', 'mizuchi']
	},
	{
		type: 'ailmentResistance',
		id: 'the-ironwill',
		role: 'The Ironwill',
		description: 'Sleep/confusion resistance up (M)',
		requiredTechs: ['mesmerize', 'id-break']
	},
	{
		type: 'ailmentResistance',
		id: 'the-unflinching',
		role: 'The Unflinching',
		description: 'Paralysis resistance up (L)',
		requiredTechs: ['shocking-rush', 'shadow-weave']
	},
	{
		type: 'ailmentResistance',
		id: 'the-tenacious',
		role: 'The Tenacious',
		description: 'Poison resistance up (L)',
		requiredTechs: ['apid-venom', 'mizuchi']
	},
	{
		type: 'ailmentResistance',
		id: 'the-fighter',
		role: 'The Fighter',
		description: 'Sleep resistance up (L)',
		requiredTechs: ['mesmerize']
	},
	{
		type: 'ailmentResistance',
		id: 'the-calm',
		role: 'The Calm',
		description: 'Confusion resistance up (L)',
		requiredTechs: ['id-break']
	},
	{
		type: 'ailmentResistance',
		id: 'the-impenetrable',
		role: 'The Impenetrable',
		description: 'Stun resistance up (L)',
		requiredTechs: ['sweep', 'tumble']
	},
	{
		type: 'ailmentResistance',
		id: 'the-indomitable',
		role: 'The Indomitable',
		description: 'Sudden death resistance up (L)',
		requiredTechs: ['dimensional-break']
	},
	{
		type: 'statusBoosting',
		id: 'the-quick',
		role: 'The Quick',
		description: 'Speed up (M)',
		requiredTechs: ['lightspeed', 'gale-strike']
	},
	{
		type: 'statusBoosting',
		id: 'punisher',
		role: 'Punisher',
		description: 'Attack up (M)',
		requiredTechs: ['enkindle', 'falling-phoenix', 'niagara-buster']
	},
	{
		type: 'statusBoosting',
		id: 'survivalist',
		role: 'Survivalist',
		description: 'Defense up (M)',
		requiredTechs: ['shiversmash', 'rampart']
	},
	{
		type: 'statusBoosting',
		id: 'enchanter',
		role: 'Enchanter',
		description: 'Focus up (M)',
		requiredTechs: ['blazing-rush', 'thorny-fetters', 'hypergravity']
	},
	{
		type: 'statusBoosting',
		id: 'the-untoppleable',
		role: 'The Untoppleable',
		description: 'HP up (L)',
		requiredTechs: ['smash-axe', 'optical-slash']
	},
	{
		type: 'attributeBoosting',
		id: 'martial-artist',
		role: 'Martial Artist',
		description: 'Strength up (M) / Mobility up (M)',
		requiredTechs: ['tumble', 'raksha', 'thunder-kick']
	},
	{
		type: 'attributeBoosting',
		id: 'mastermind',
		role: 'Mastermind',
		description: 'Strength up (M) / Intelligence up (M)',
		requiredTechs: ['seismic-strike', 'shiversmash', 'gale-strike']
	},
	{
		type: 'attributeBoosting',
		id: 'foot-soldier',
		role: 'Foot Soldier',
		description: 'Dexterity up (M) / Mobility up (M)',
		requiredTechs: ['piercing-lightning', 'matador', 'shocking-rush']
	},
	{
		type: 'attributeBoosting',
		id: 'armored-knight',
		role: 'Armored Knight',
		description: 'Dexterity up (M) / Endurance up (M)',
		requiredTechs: ['vandalize', 'optical-slash', 'shadow-reversal']
	},
	{
		type: 'attributeBoosting',
		id: 'archer',
		role: 'Archer',
		description: 'Endurance up (M) / Acuity up (M)',
		requiredTechs: ['incendiary-arrow', 'id-break', 'shadow-weave']
	},
	{
		type: 'attributeBoosting',
		id: 'invoker',
		role: 'Invoker',
		description: 'Intelligence up (M) / Acuity up (M)',
		requiredTechs: ['mizuchi', 'aim', 'arm-of-light']
	},
	{
		type: 'attributeBoosting',
		id: 'all-rounder',
		role: 'All-Rounder',
		description: 'All 6 basic attributes up (M) / HP down (XL)',
		requiredTechs: ['divine-lancer', 'maniac-blossom']
	},
	{
		type: 'attributeBoosting',
		id: 'the-strong-attr',
		role: 'The Strong',
		description: 'Strength up (L)',
		requiredTechs: ['vandalize', 'enkindle']
	},
	{
		type: 'attributeBoosting',
		id: 'the-able',
		role: 'The Able',
		description: 'Dexterity up (L)',
		requiredTechs: ['tumble', 'quick-nock']
	},
	{
		type: 'attributeBoosting',
		id: 'the-fluid',
		role: 'The Fluid',
		description: 'Mobility up (L)',
		requiredTechs: ['triple-thrust', 'slide']
	},
	{
		type: 'attributeBoosting',
		id: 'the-tough',
		role: 'The Tough',
		description: 'Endurance up (L)',
		requiredTechs: ['niagara-buster', 'optical-slash']
	},
	{
		type: 'attributeBoosting',
		id: 'the-studious',
		role: 'The Studious',
		description: 'Intelligence up (L)',
		requiredTechs: ['arm-of-light', 'dimensional-break']
	},
	{
		type: 'attributeBoosting',
		id: 'the-driven',
		role: 'The Driven',
		description: 'Acuity up (L)',
		requiredTechs: ['split-cranium', 'rapid-volley']
	},
	{
		type: 'benison',
		id: 'rule-of-law',
		role: 'The Rule of Law',
		description: "Increases frequency of Shaams's Adjudication",
		requiredTechs: ['heaven-and-earth', 'hell-s-fury', 'seismic-strike']
	},
	{
		type: 'benison',
		id: 'ocean-s-cry',
		role: "The Ocean's Cry",
		description: "Increases frequency of Diemazu's Lamentation",
		requiredTechs: ['churning-earth', 'snowstorm', 'rain-of-life']
	},
	{
		type: 'benison',
		id: 'martial-expert',
		role: 'The Martial Expert',
		description: "Increases frequency of Marigan's Mania",
		requiredTechs: ['dual-whirlwind', 'maim', 'reaper']
	},
	{
		type: 'benison',
		id: 'technician',
		role: 'The Technician',
		description: "Increases frequency of Tejedura's Embrace",
		requiredTechs: ['flowing-slash', 'power-disruptor', 'submission']
	},
	{
		type: 'benison',
		id: 'earth-s-ally',
		role: "The Earth's Ally",
		description: "Increases frequency of Astel's Mercy",
		requiredTechs: ['tailwind', 'earth-heal', 'thorny-fetters']
	},
	{
		type: 'benison',
		id: 'healer',
		role: 'The Healer',
		description: "Increases frequency of Kada's Comfort",
		requiredTechs: ['rain-of-life', 'earth-heal', 'holy-grail']
	},
	{
		type: 'benison',
		id: 'caller',
		role: 'The Caller',
		description: "Increases frequency of Adamas's Strength",
		requiredTechs: ['raksha', 'shiversmash', 'downswing']
	},
	{
		type: 'benison',
		id: 'grand-wall',
		role: 'The Grand Wall',
		description: "Increases frequency of Imhokiel's Fortification",
		requiredTechs: ['windmill', 'optical-slash', 'apathy']
	},
	{
		type: 'benison',
		id: 'battler',
		role: 'The Battler',
		description: "Increases frequency of Tukuz's Swiftness",
		requiredTechs: ['triple-thrust', 'gale-strike', 'spiral-charge']
	},
	{
		type: 'benison',
		id: 'chosen',
		role: 'The Chosen',
		description: "Increases frequency of Bartlett's Stratagem",
		requiredTechs: ['vertical-smash', 'slide', 'mesmerize']
	},
	{
		type: 'benison',
		id: 'sage',
		role: 'The Sage',
		description: "Increases frequency of Macha's Brilliance",
		requiredTechs: ['crimson-flare', 'the-tower', 'call-lightning']
	},
	{
		type: 'benison',
		id: 'beauty',
		role: 'The Beauty',
		description: "Increases frequency of Uzume's Inspiration",
		requiredTechs: ['scattered-petals', 'triple-dragon', 'morning-glory']
	},
	{
		type: 'misc',
		id: 'exemplar',
		role: 'Exemplar',
		description: "Slightly raises allies' skill levels to match your own",
		requiredTechs: ['flowing-slash', 'halting-blade', 'crystalline-carve', 'grand-slam']
	}
];

type RoleDictionary = { [key: string]: CharacterRole | LearnableRole };
export const roles: RoleDictionary = {};
characterRoles.forEach((role) => {
	roles[role.id] = role;
});
learnableRoles.forEach((role) => {
	roles[role.id] = role;
});

export class Role {
	private data: CharacterRole | LearnableRole;
	constructor(public id: string) {
		const data =
			characterRoles.find((role) => role.id === id) ||
			learnableRoles.find((role) => role.id === id);
		if (!data) {
			throw new Error(`No data found for role: ${id}`);
		}
		this.data = data;
	}

	get name() {
		return this.data.role;
	}

	get requiredAbilities() {
		if (this.data.type === 'character') {
			return [];
		}
		return this.data.requiredTechs.map((abilityId) => new Ability(abilityId));
	}

	get description() {
		return this.data.description;
	}

	get type() {
		return this.data.type;
	}
}
