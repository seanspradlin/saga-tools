import { Role } from './roles';

export interface CharacterData {
	id: string;
	name: string;
	roles: string[];
}

export const characters: CharacterData[] = [
	{
		id: 'adill',
		name: 'Adill',
		roles: ['leader']
	},
	{
		id: 'angle',
		name: 'Angle',
		roles: ['captain']
	},
	{
		id: 'antonius',
		name: 'Antonius',
		roles: ['seasoned-duelist']
	},
	{
		id: 'arch-witch',
		name: 'Arch Witch',
		roles: ['arch-witch']
	},
	{
		id: 'arthur-dalton',
		name: 'Arthur Dalton',
		roles: ['the-invincible']
	},
	{
		id: 'aslana-melek',
		name: 'Aslana Melek',
		roles: ['the-war-torn']
	},
	{
		id: 'balmaint',
		name: 'Balmaint',
		roles: ['executioner']
	},
	{
		id: 'beatrice',
		name: 'Beatrice',
		roles: ['queensguard']
	},
	{
		id: 'casper',
		name: 'Casper',
		roles: ['contrarian']
	},
	{
		id: 'cecilia',
		name: 'Cecilia',
		roles: ['trickster']
	},
	{
		id: 'chiago-lisboa',
		name: 'Chiago Lisboa',
		roles: ['stalwart']
	},
	{
		id: 'chichi',
		name: 'Chichi',
		roles: ['goldsmiths-daughter']
	},
	{
		id: 'clover',
		name: 'Clover',
		roles: ['hard-worker']
	},
	{
		id: 'colleen',
		name: 'Colleen',
		roles: ['herbalist']
	},
	{
		id: 'compass',
		name: 'Compass',
		roles: ['scimitar-expert']
	},
	{
		id: 'elisabeth',
		name: 'Elisabeth',
		roles: ['astute-lass']
	},
	{
		id: 'elysed',
		name: 'Elysed',
		roles: ['the-popular']
	},
	{
		id: 'erreich',
		name: 'Erreich',
		roles: ['the-indecisive']
	},
	{
		id: 'francis',
		name: 'Francis',
		roles: ['explorer']
	},
	{
		id: 'gabriel',
		name: 'Gabriel',
		roles: ['grand-protector']
	},
	{
		id: 'giselle',
		name: 'Giselle',
		roles: ['dancer']
	},
	{
		id: 'griffin',
		name: 'Griffin',
		roles: ['instructor']
	},
	{
		id: 'guinevere',
		name: 'Guinevere',
		roles: ['vixen']
	},
	{
		id: 'hagar',
		name: 'Hagar',
		roles: ['the-ill-fate']
	},
	{
		id: 'hilda',
		name: 'Hilda',
		roles: ['disciple']
	},
	{
		id: 'hongswan',
		name: 'Hongswan',
		roles: ['the-vigilant']
	},
	{
		id: 'house',
		name: 'House',
		roles: ['provocateur']
	},
	{
		id: 'ignatius',
		name: 'Ignatius',
		roles: ['master']
	},
	{
		id: 'irene',
		name: 'Irene',
		roles: ['immovable-object']
	},
	{
		id: 'isaac',
		name: 'Isaac',
		roles: ['first-responder']
	},
	{
		id: 'jamto',
		name: 'Jamto',
		roles: ['guardsman']
	},
	{
		id: 'jerome',
		name: 'Jerome',
		roles: ['servant']
	},
	{
		id: 'julia',
		name: 'Julia',
		roles: ['tracker']
	},
	{
		id: 'kahn',
		name: 'Kahn',
		roles: ['breadwinner']
	},
	{
		id: 'keegan',
		name: 'Keegan',
		roles: ['merchant']
	},
	{
		id: 'kenji',
		name: 'Kenji',
		roles: ['normi-warrior']
	},
	{
		id: 'kreisa',
		name: 'Kreisa',
		roles: ['sorceress']
	},
	{
		id: 'kumi',
		name: 'Kumi',
		roles: ['first-striker']
	},
	{
		id: 'lady',
		name: 'Lady',
		roles: ['realist']
	},
	{
		id: 'lamar',
		name: 'Lamar',
		roles: ['the-courageous']
	},
	{
		id: 'leonard',
		name: 'Leonard',
		roles: ['cannonball']
	},
	{
		id: 'lewis-darling',
		name: 'Lewis Darling',
		roles: ['the-hearty']
	},
	{
		id: 'lord-stabiae',
		name: 'Lord Stabiae',
		roles: ['noble']
	},
	{
		id: 'luna',
		name: 'Luna',
		roles: ['second-level-clerk']
	},
	{
		id: 'marion',
		name: 'Marion',
		roles: ['the-overbearing']
	},
	{
		id: 'maximus',
		name: 'Maximus',
		roles: ['wizened-duelist']
	},
	{
		id: 'mirane',
		name: 'Mirane',
		roles: ['ascetic']
	},
	{
		id: 'mondo',
		name: 'Mondo',
		roles: ['the-unflinching']
	},
	{
		id: 'muiredach',
		name: 'Muiredach',
		roles: ['mayor']
	},
	{
		id: 'nasir',
		name: 'Nasir',
		roles: ['good-for-nothing']
	},
	{
		id: 'nemain',
		name: 'Nemain',
		roles: ['magician']
	},
	{
		id: 'nessa',
		name: 'Nessa',
		roles: ['scout']
	},
	{
		id: 'nolan',
		name: 'Nolan',
		roles: ['shepherd']
	},
	{
		id: 'ogniana',
		name: 'Ogniana',
		roles: ['oppressor']
	},
	{
		id: 'orville',
		name: 'Orville',
		roles: ['birdman']
	},
	{
		id: 'patricia',
		name: 'Patricia',
		roles: ['the-collected']
	},
	{
		id: 'paul',
		name: 'Paul',
		roles: ['the-charismatic']
	},
	{
		id: 'queen',
		name: 'Queen',
		roles: ['heart-attacker']
	},
	{
		id: 'raphael',
		name: 'Raphael',
		roles: ['scallywag']
	},
	{
		id: 'rico',
		name: 'Rico',
		roles: ['thug']
	},
	{
		id: 'robert',
		name: 'Robert',
		roles: ['guardian']
	},
	{
		id: 'roh-sung',
		name: 'Roh Sung',
		roles: ['tactician']
	},
	{
		id: 'sabit',
		name: 'Sabit',
		roles: ['freewheeler']
	},
	{
		id: 'sasha',
		name: 'Sasha',
		roles: ['spiritualist']
	},
	{
		id: 'snail',
		name: 'Snail',
		roles: ['vanguard']
	},
	{
		id: 'socrates',
		name: 'Socrates',
		roles: ['fisherman']
	},
	{
		id: 'solon',
		name: 'Solon',
		roles: ['the-shrewd']
	},
	{
		id: 'strumiknen',
		name: 'Strumiknen',
		roles: ['the-selfish']
	},
	{
		id: 'taria',
		name: 'Taria',
		roles: ['covert-ops']
	},
	{
		id: 'tissisaaq',
		name: 'Tissisaaq',
		roles: ['hunter']
	},
	{
		id: 'tomato',
		name: 'Tomato',
		roles: ['crusher']
	},
	{
		id: 'tsubaki',
		name: 'Tsubaki',
		roles: ['purger']
	},
	{
		id: 'urpina',
		name: 'Urpina',
		roles: ['novice-duelist', 'maidenblade']
	},
	{
		id: 'victoria',
		name: 'Victoria',
		roles: ['backliner']
	},
	{
		id: 'yohman',
		name: 'Yohman',
		roles: ['helmsman']
	},
	{
		id: 'zigor',
		name: 'Zigor',
		roles: ['raider']
	}
];

export class Character {
	private data: CharacterData;

	constructor(public id: string) {
		const data = characters.find((character) => character.id === id);
		if (!data) {
			throw new Error(`No data found for character: ${id}`);
		}
		this.data = data;
	}

	get name() {
		return this.data.name;
	}

	get roles() {
		return this.data.roles.map((roleId) => new Role(roleId));
	}
}
