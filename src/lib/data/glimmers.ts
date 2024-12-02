import type { WeaponType } from '$lib/data/techs';

type GreatswordGlimmer = {
	type: 'greatsword';
	standard: string[];
	power: string[];
	katana: string[];
	technical: string[];
	'true-katana': string[];
};
type SwordGlimmer = {
	type: 'sword';
	standard: string[];
	technical: string[];
	curved: string[];
	special: string[];
};
type TwinSwordsGlimmer = {
	type: 'twinSwords';
	'dual-wield': string[];
};
type ShortSwordGlimmer = {
	type: 'shortsword';
	standard: string[];
	dramatic: string[];
	technical: string[];
	special: string[];
};
type SpearGlimmer = {
	type: 'spear';
	standard: string[];
	thrusting: string[];
	technical: string[];
	special: string[];
};
type AxeGlimmer = {
	type: 'axe';
	standard: string[];
	power: string[];
	technical: string[];
	special: string[];
};
type ClubGlimmer = {
	type: 'club';
	standard: string[];
	power: string[];
	technical: string[];
	special: string[];
};
type BowGlimmer = {
	type: 'bow';
	standard: string[];
	dramatic: string[];
	technical: string[];
	special: string[];
};
type MartialArtsGlimmer = {
	type: 'martialArts';
	standard: string[];
};
type StaffGlimmer = {
	type: 'staff';
	standard: string[];
};
export type Glimmer =
	| GreatswordGlimmer
	| SwordGlimmer
	| TwinSwordsGlimmer
	| ShortSwordGlimmer
	| SpearGlimmer
	| AxeGlimmer
	| ClubGlimmer
	| BowGlimmer
	| MartialArtsGlimmer
	| StaffGlimmer;

export const glimmers: { [key: string]: Glimmer } = {
	treecleaver: {
		type: 'axe',
		standard: [],
		power: [],
		technical: [],
		special: []
	},
	'smash-axe': {
		type: 'axe',
		standard: [],
		power: ['treecleaver'],
		technical: ['treecleaver', 'power-disruptor'],
		special: ['treecleaver', 'power-disruptor']
	},
	maim: {
		type: 'axe',
		standard: ['treecleaver', 'hyper-hammer'],
		power: [],
		technical: ['treecleaver', 'power-disruptor'],
		special: ['treecleaver', 'power-disruptor']
	},
	'vertical-smash': {
		type: 'axe',
		standard: ['treecleaver', 'dimensional-break'],
		power: ['treecleaver'],
		technical: [],
		special: []
	},
	'dimensional-break': {
		type: 'axe',
		standard: ['maim'],
		power: [],
		technical: [],
		special: []
	},
	'power-disruptor': {
		type: 'axe',
		standard: [],
		power: ['smash-axe', 'maim'],
		technical: [],
		special: ['smash-axe', 'maim']
	},
	'hyper-hammer': {
		type: 'axe',
		standard: ['vertical-smash'],
		power: [],
		technical: ['smash-axe', 'vertical-smash'],
		special: []
	},
	'unbridled-frenzy': {
		type: 'axe',
		standard: [],
		power: [],
		technical: [],
		special: ['treecleaver']
	},
	'hells-fury': {
		type: 'axe',
		standard: [],
		power: ['vertical-smash', 'hyper-hammer'],
		technical: [],
		special: []
	},
	'reverse-delta': {
		type: 'axe',
		standard: ['maim', 'vertical-smash', 'dimensional-break'],
		power: [],
		technical: ['maim', 'morning-glory'],
		special: ['maim', 'morning-glory']
	},
	'morning-glory': {
		type: 'axe',
		standard: [],
		power: ['smash-axe', 'hyper-hammer'],
		technical: ['smash-axe', 'reverse-delta'],
		special: ['smash-axe', 'reverse-delta']
	},
	'aimed-shot': {
		type: 'bow',
		standard: [],
		special: [],
		technical: [],
		dramatic: []
	},
	'shadow-weave': {
		type: 'bow',
		standard: [],
		special: [],
		technical: ['aimed-shot', 'rapid-volley'],
		dramatic: []
	},
	'quick-nock': {
		type: 'bow',
		standard: ['aimed-shot'],
		special: ['aimed-shot'],
		technical: ['aimed-shot', 'shadow-weave'],
		dramatic: ['aimed-shot']
	},
	'rapid-volley': {
		type: 'bow',
		standard: ['quick-nock'],
		special: [],
		technical: ['quick-nock'],
		dramatic: []
	},
	'incendiary-arrow': {
		type: 'bow',
		standard: [],
		special: ['aimed-shot', 'quick-nock'],
		technical: ['quick-nock', 'rapid-volley'],
		dramatic: ['aimed-shot', 'quick-nock']
	},
	'id-break': {
		type: 'bow',
		standard: ['aimed-shot', 'quick-nock'],
		special: [],
		technical: [],
		dramatic: []
	},
	'falling-phoenix': {
		type: 'bow',
		standard: [],
		special: [],
		technical: ['shadow-weave'],
		dramatic: []
	},
	'plasma-shot': {
		type: 'bow',
		standard: [],
		special: [],
		technical: [],
		dramatic: ['quick-nock', 'incendiary-arrow', 'rain-of-arrows']
	},
	'rain-of-arrows': {
		type: 'bow',
		standard: ['rapid-volley', 'id-break'],
		special: ['incendiary-arrow'],
		technical: [],
		dramatic: ['incendiary-arrow']
	},
	'heart-seeker': {
		type: 'bow',
		standard: ['id-break', 'rain-of-arrows'],
		special: ['incendiary-arrow', 'rain-of-arrows'],
		technical: [],
		dramatic: []
	},
	millionaire: {
		type: 'bow',
		standard: [],
		special: ['rain-of-arrows', 'heart-seeker'],
		technical: [],
		dramatic: ['plasma-shot', 'rain-of-arrows']
	},
	roundhouse: {
		type: 'club',
		standard: [],
		technical: [],
		special: [],
		power: []
	},
	block: {
		type: 'club',
		standard: ['roundhouse'],
		technical: [],
		special: ['roundhouse'],
		power: []
	},
	enkindle: {
		type: 'club',
		standard: ['roundhouse'],
		technical: [],
		special: ['roundhouse'],
		power: []
	},
	bonecrusher: {
		type: 'club',
		standard: [],
		technical: ['enkindle'],
		special: ['roundhouse', 'shiversmash'],
		power: ['roundhouse', 'shiversmash']
	},
	'seismic-strike': {
		type: 'club',
		standard: ['enkindle'],
		technical: [],
		special: [],
		power: []
	},
	shiversmash: {
		type: 'club',
		standard: [],
		technical: [],
		special: ['roundhouse'],
		power: ['roundhouse']
	},
	'gale-strike': {
		type: 'club',
		standard: [],
		technical: ['enkindle'],
		special: [],
		power: []
	},
	'rock-splitter': {
		type: 'club',
		standard: [],
		technical: [],
		special: [],
		power: ['bonecrusher', 'grand-slam']
	},
	'grand-slam': {
		type: 'club',
		standard: ['roundhouse', 'enkindle'],
		technical: ['roundhouse', 'enkindle', 'bonecrusher'],
		special: ['bonecrusher'],
		power: ['rock-splitter', 'bonecrusher']
	},
	nutcracker: {
		type: 'club',
		standard: ['grand-slam'],
		technical: ['grand-slam'],
		special: [],
		power: []
	},
	'maniac-blossom': {
		type: 'club',
		standard: [],
		technical: [],
		special: ['bonecrusher'],
		power: ['bonecrusher']
	},
	'dual-cross-cut': {
		type: 'twinSwords',
		'dual-wield': []
	},
	'dual-whirlwind': {
		type: 'twinSwords',
		'dual-wield': ['dual-cross-cut']
	},
	'dual-torrent': {
		type: 'twinSwords',
		'dual-wield': ['dual-whirlwind']
	},
	'smash-gs': {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: [],
		technical: [],
		'true-katana': []
	},
	deflect: {
		type: 'greatsword',
		standard: ['optical-slash'],
		power: ['downswing'],
		katana: [],
		technical: [],
		'true-katana': []
	},
	blizzard: {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: [],
		technical: [],
		'true-katana': ['flowing-slash', 'eclipse', 'scattered-petals']
	},
	'flowing-slash': {
		type: 'greatsword',
		standard: ['smash-gs'],
		power: [],
		katana: ['smash-gs'],
		technical: ['smash-gs'],
		'true-katana': []
	},
	downswing: {
		type: 'greatsword',
		standard: [],
		power: ['smash-gs'],
		katana: [],
		technical: [],
		'true-katana': []
	},
	'optical-slash': {
		type: 'greatsword',
		standard: ['flowing-slash'],
		power: [],
		katana: ['flowing-slash'],
		technical: ['flowing-slash'],
		'true-katana': []
	},
	'lunar-blade': {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: [],
		technical: [],
		'true-katana': ['blizzard', 'flowing-slash', 'eclipse', 'scattered-petals']
	},
	gravedigger: {
		type: 'greatsword',
		standard: ['smash-gs', 'flowing-slash'],
		power: ['downswing', 'vandalize'],
		katana: [],
		technical: ['smash-gs', 'flowing-slash'],
		'true-katana': []
	},
	'headwind-rush': {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: [],
		technical: ['flowing-slash', 'gravedigger', 'waning-moon'],
		'true-katana': []
	},
	vandalize: {
		type: 'greatsword',
		standard: [],
		power: ['smash-gs', 'gravedigger'],
		katana: [],
		technical: [],
		'true-katana': []
	},
	'shadow-reversal': {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: ['wheel-swing'],
		technical: [],
		'true-katana': []
	},
	eclipse: {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: [],
		technical: [],
		'true-katana': ['flowing-slash', 'lunar-blade', 'scattered-petals']
	},
	'wheel-swing': {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: ['smash-gs', 'flowing-slash'],
		technical: [],
		'true-katana': []
	},
	'scattered-petals': {
		type: 'greatsword',
		standard: [],
		power: [],
		katana: ['wheel-swing'],
		technical: [],
		'true-katana': ['eclipse']
	},
	'waning-moon': {
		type: 'greatsword',
		standard: ['gravedigger'],
		power: ['gravedigger'],
		katana: ['gravedigger'],
		technical: [],
		'true-katana': []
	},
	'sonic-slash': {
		type: 'sword',
		standard: [],
		technical: [],
		curved: [],
		special: []
	},
	'brusque-slice': {
		type: 'sword',
		standard: ['sonic-slash'],
		technical: ['sonic-slash'],
		curved: ['sonic-slash', 'demilune'],
		special: []
	},
	rampart: {
		type: 'sword',
		standard: ['brusque-slice'],
		technical: ['sonic-slash', 'brusque-slice'],
		curved: [],
		special: ['sonic-slash']
	},
	'sonic-blade': {
		type: 'sword',
		standard: ['sonic-slash', 'brusque-slice'],
		technical: ['sonic-slash', 'brusque-slice'],
		curved: [],
		special: []
	},
	demilune: {
		type: 'sword',
		standard: [],
		technical: [],
		curved: ['brusque-slice', 'heaven-and-earth'],
		special: []
	},
	'rising-nova': {
		type: 'sword',
		standard: ['sonic-slash'],
		technical: [],
		curved: ['sonic-slash'],
		special: []
	},
	'heaven-and-earth': {
		type: 'sword',
		standard: ['sonic-slash', 'rising-nova'],
		technical: ['sonic-slash', 'brusque-slice'],
		curved: [],
		special: []
	},
	apathy: {
		type: 'sword',
		standard: ['heaven-and-earth'],
		technical: [],
		curved: ['rosario-impale'],
		special: ['counter-technique']
	},
	'triple-thrust': {
		type: 'sword',
		standard: ['sonic-blade'],
		technical: ['sonic-blade'],
		curved: [],
		special: []
	},
	'thousand-blades': {
		type: 'sword',
		standard: ['triple-thrust'],
		technical: [],
		curved: ['heaven-and-earth'],
		special: []
	},
	'halting-blade': {
		type: 'sword',
		standard: [],
		technical: [],
		curved: ['demilune', 'halting-blade'],
		special: []
	},
	'multi-way': {
		type: 'sword',
		standard: ['heaven-and-earth'],
		technical: [],
		curved: [],
		special: ['rosario-impale']
	},
	'rosario-impale': {
		type: 'sword',
		standard: [],
		technical: [],
		curved: [],
		special: ['sonic-slash', 'rising-nova']
	},
	punch: {
		type: 'martialArts',
		standard: []
	},
	tumble: {
		type: 'martialArts',
		standard: ['punch', 'raksha', 'triple-dragon']
	},
	chop: {
		type: 'martialArts',
		standard: ['punch', 'niagara-buster', 'triple-dragon']
	},
	slide: {
		type: 'martialArts',
		standard: ['punch', 'raksha', 'niagara-buster']
	},
	'jolt-counter': {
		type: 'martialArts',
		standard: ['tumble', 'chop', 'slide']
	},
	'thunder-kick': {
		type: 'martialArts',
		standard: ['slide']
	},
	submission: {
		type: 'martialArts',
		standard: ['tumble']
	},
	raksha: {
		type: 'martialArts',
		standard: ['chop']
	},
	'niagara-buster': {
		type: 'martialArts',
		standard: ['submission']
	},
	'triple-dragon': {
		type: 'martialArts',
		standard: ['thunder-kick']
	},
	retribution: {
		type: 'martialArts',
		standard: ['raksha']
	},
	'rising-sun': {
		type: 'martialArts',
		standard: ['raksha', 'niagara-buster', 'triple-dragon']
	},
	'quick-thrust': {
		type: 'shortsword',
		standard: [],
		special: [],
		technical: [],
		dramatic: []
	},
	mesmerize: {
		type: 'shortsword',
		standard: ['apid-venom', 'southern-cross'],
		special: ['quick-thrust', 'apid-venom'],
		technical: [],
		dramatic: []
	},
	lightspeed: {
		type: 'shortsword',
		standard: ['quick-thrust'],
		special: [],
		technical: ['quick-thrust'],
		dramatic: ['quick-thrust']
	},
	matador: {
		type: 'shortsword',
		standard: [],
		special: ['quick-thrust'],
		technical: [],
		dramatic: []
	},
	'apid-venom': {
		type: 'shortsword',
		standard: ['quick-thrust', 'piercing-lightning'],
		special: ['quick-thrust'],
		technical: [],
		dramatic: []
	},
	'crystalline-carve': {
		type: 'shortsword',
		standard: [],
		special: ['apid-venom'],
		technical: ['quick-thrust', 'piercing-lightning'],
		dramatic: ['quick-thrust', 'piercing-lightning']
	},
	'shocking-rush': {
		type: 'shortsword',
		standard: [],
		special: [],
		technical: ['quick-thrust', 'crystalline-carve'],
		dramatic: []
	},
	'piercing-lightning': {
		type: 'shortsword',
		standard: ['quick-thrust', 'apid-venom'],
		special: [],
		technical: [],
		dramatic: ['shocking-rush', 'eulogy']
	},
	'golden-note': {
		type: 'shortsword',
		standard: [],
		special: ['crystalline-carve'],
		technical: [],
		dramatic: []
	},
	eulogy: {
		type: 'shortsword',
		standard: [],
		special: [],
		technical: [],
		dramatic: ['crystalline-carve']
	},
	'southern-cross': {
		type: 'shortsword',
		standard: ['piercing-lightning'],
		special: [],
		technical: ['piercing-lightning'],
		dramatic: ['piercing-lightning']
	},
	pierce: {
		type: 'spear',
		standard: [],
		thrusting: [],
		technical: [],
		special: []
	},
	'split-cranium': {
		type: 'spear',
		standard: ['pierce', 'spiral-charge'],
		thrusting: ['pierce', 'spiral-charge'],
		technical: [],
		special: ['pierce', 'spiral-charge']
	},
	shelter: {
		type: 'spear',
		standard: ['mizuchi', 'spiral-charge'],
		thrusting: ['mizuchi', 'spiral-charge'],
		technical: [],
		special: ['mizuchi', 'spiral-charge']
	},
	sweep: {
		type: 'spear',
		standard: ['pierce', 'spiral-charge'],
		thrusting: [],
		technical: ['pierce', 'reaper'],
		special: []
	},
	reaper: {
		type: 'spear',
		standard: [],
		thrusting: [],
		technical: ['pierce', 'sweep'],
		special: []
	},
	aim: {
		type: 'spear',
		standard: ['pierce', 'spiral-charge'],
		thrusting: [],
		technical: [],
		special: []
	},
	mizuchi: {
		type: 'spear',
		standard: ['split-cranium'],
		thrusting: ['split-cranium', 'aim'],
		technical: [],
		special: ['split-cranium', 'divine-lancer']
	},
	'spiral-charge': {
		type: 'spear',
		standard: ['split-cranium', 'sweep', 'mizuchi'],
		thrusting: ['split-cranium', 'aim', 'mizuchi'],
		technical: [],
		special: ['split-cranium', 'mizuchi']
	},
	'divine-lancer': {
		type: 'spear',
		standard: [],
		thrusting: [],
		technical: [],
		special: ['split-cranium', 'mizuchi', 'arm-of-light']
	},
	'arm-of-light': {
		type: 'spear',
		standard: ['mizuchi'],
		thrusting: [],
		technical: [],
		special: ['mizuchi']
	},
	windmill: {
		type: 'spear',
		standard: [],
		thrusting: [],
		technical: ['sweep', 'reaper'],
		special: []
	},
	triumverate: {
		type: 'spear',
		standard: ['sweep'],
		thrusting: [],
		technical: ['sweep', 'reaper', 'arm-of-light'],
		special: []
	},
	'focusing-strike': {
		type: 'staff',
		standard: []
	},
	'shattered-dreams': {
		type: 'staff',
		standard: ['focusing-strike']
	},
	cruncher: {
		type: 'staff',
		standard: ['focusing-strike', 'shattered-dreams']
	}
};

export type GlimmerDetails = {
	weaponType?: string;
	abilityIds: string[];
};
export type GlimmerChart = {
	[key: string]: {
		type: WeaponType;
		glimmers: GlimmerDetails[];
	};
};
export const glimmerChart: GlimmerChart = {};
Object.keys(glimmers).forEach((key) => {
	const { type, ...entries } = glimmers[key];
	const g = Object.entries(entries).map(([key, val]) => {
		return { weaponType: key, abilityIds: val };
	});
	glimmerChart[key] = {
		type,
		glimmers: g
	};
});
