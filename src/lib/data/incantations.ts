/**
 * Sourced from The Strelitzia Inn
 * https://thaao.net/sagasca/character/?p=jutsu
 */

export interface Incantation {
	type: 'incantation';
	element: 'natura' | 'ignis' | 'terra' | 'aes' | 'unda';
	id: string;
	name: string;
	cost: number;
	target: string;
	tier: number;
	attributes: string[];
	effect?: string;
	skill: string[];
}
export const incantations: Incantation[] = [
	{
		type: 'incantation',
		element: 'natura',
		id: 'thorny-fetters',
		name: 'Thorny Fetters',
		cost: 2,
		target: 'Single',
		tier: 1,
		attributes: ['Pierce', 'Slash'],
		effect: 'Speed Down',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'natura',
		id: 'restoration',
		name: 'Restoration',
		cost: 5,
		tier: 2,
		attributes: [],
		target: 'All allies',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'natura',
		id: 'call-lightning',
		name: 'Call Lightning',
		cost: 4,
		tier: 3,
		attributes: ['Lightning'],
		target: 'All enemies',
		effect: 'Paralyze',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'natura',
		id: 'tailwind',
		name: 'Tailwind',
		cost: 4,
		tier: 4,
		attributes: [],
		target: 'All allies',
		effect: 'BP Up',
		skill: ['int', 'acu']
	},
	{
		type: 'incantation',
		element: 'ignis',
		id: 'blazing-rush',
		name: 'Blazing Rush',
		cost: 2,
		target: 'Single',
		tier: 1,
		attributes: [],
		effect: 'Speed Up',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'ignis',
		id: 'power-surge',
		name: 'Power Surge',
		cost: 1,
		target: 'Single',
		tier: 2,
		attributes: [],
		effect: 'Attack Up',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'ignis',
		id: 'wildfire',
		name: 'Wildfire',
		cost: 5,
		target: 'All enemies',
		tier: 3,
		attributes: ['Fire'],
		effect: 'Stun',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'ignis',
		id: 'crimson-flare',
		name: 'Crimson Flare',
		cost: 1,
		target: 'Single',
		tier: 4,
		attributes: ['Fire'],
		effect: 'Attack Down',
		skill: ['int', 'acu']
	},
	{
		type: 'incantation',
		element: 'terra',
		id: 'hypergravity',
		name: 'Hypergravity',
		cost: 3,
		target: 'All enemies',
		tier: 1,
		attributes: ['Blunt'],
		effect: 'BP Down',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'terra',
		id: 'sleep',
		name: 'Sleep',
		cost: 3,
		target: 'All enemies',
		tier: 2,
		attributes: [],
		effect: 'Sleep',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'terra',
		id: 'earth-heal',
		name: 'Earth Heal',
		cost: 2,
		target: 'Single',
		tier: 3,
		attributes: [],
		effect: 'Recovery',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'terra',
		id: 'churning-earth',
		name: 'Churning Earth',
		cost: 3,
		target: 'All enemies',
		tier: 4,
		attributes: ['Blunt'],
		effect: 'Defense Down',
		skill: ['int', 'acu']
	},
	{
		type: 'incantation',
		element: 'aes',
		id: 'holy-grail',
		name: 'Holy Grail',
		cost: 4,
		target: 'Single',
		tier: 1,
		attributes: [],
		effect: 'Revive',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'aes',
		id: 'armor-blessing',
		name: 'Armor Blessing',
		cost: 1,
		target: 'Single',
		tier: 2,
		attributes: [],
		effect: 'Defense Up',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'aes',
		id: 'siren',
		name: 'Siren',
		cost: 2,
		target: 'All enemies',
		tier: 3,
		attributes: ['Lightning'],
		effect: 'Frenzy',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'aes',
		id: 'the-tower',
		name: 'The Tower',
		cost: 2,
		target: 'All enemies',
		tier: 4,
		attributes: ['Slash', 'Pierce'],
		effect: 'Focus Down',
		skill: ['int', 'acu']
	},
	{
		type: 'incantation',
		element: 'unda',
		id: 'poisonous-mist',
		name: 'Poisonous Mist',
		cost: 3,
		target: 'All enemies',
		tier: 1,
		attributes: ['Ice'],
		effect: 'Poison',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'unda',
		id: 'water-blast',
		name: 'Water Blast',
		cost: 4,
		target: 'Single',
		tier: 2,
		attributes: ['Ice', 'Blunt'],
		effect: 'Defense Down',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'unda',
		id: 'rain-of-life',
		name: 'Rain of Life',
		cost: 3,
		target: 'All allies',
		tier: 3,
		attributes: [],
		effect: 'Recovery',
		skill: ['int']
	},
	{
		type: 'incantation',
		element: 'unda',
		id: 'snowstorm',
		name: 'Snowstorm',
		cost: 6,
		target: 'All enemies',
		tier: 4,
		attributes: ['Ice'],
		effect: 'None',
		skill: ['int', 'acu']
	}
];
