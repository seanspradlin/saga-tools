import { techs, type Tech } from './techs';
import { incantations, type Incantation } from './incantations';
import { glimmerChart } from './glimmers';

export type AbilityData = Tech | Incantation;
type AbilityMap = { [key: string]: AbilityData };
export const abilities: AbilityMap = {};
techs.forEach((tech) => {
	abilities[tech.id] = tech;
});
incantations.forEach((incantation) => {
	abilities[incantation.id] = incantation;
});

export class Ability {
	private data: AbilityData;
	constructor(public id: string) {
		const ability = abilities[id];
		if (!ability) {
			throw new Error(`No data found for ability: ${id}`);
		}
		this.data = ability;
	}

	get name() {
		return this.data.name;
	}

	get type() {
		return this.data.type;
	}

	get description() {
		if (this.data.type === 'incantation') {
			return '';
		}
		return this.data.description;
	}

	get cost() {
		return this.data.cost;
	}

	get target() {
		return this.data.target;
	}

	get attributes() {
		return this.data.attributes;
	}

	get ranged() {
		if (this.data.type === 'incantation') {
			return false;
		}
		return this.data.ranged;
	}

	get conditionals() {
		if (this.data.type === 'incantation') {
			return [];
		}

		return this.data.conditionals;
	}

	get effect() {
		return this.data.effect;
	}

	get skills() {
		return this.data.skill;
	}

	get element() {
		if (this.data.type === 'incantation') {
			return this.data.element;
		}
		return null;
	}

	get spellTier() {
		if (this.data.type === 'incantation') {
			return this.data.tier;
		}
		return null;
	}

	get glimmeredFrom() {
		const glimmer = glimmerChart[this.id];
		const arr: { weaponType: string; abilities: Ability[] }[] = [];
		if (!glimmer) {
			return arr;
		}

		return glimmer.glimmers.map((g) => {
			return {
				weaponType: g.weaponType,
				abilities: g.abilityIds.map((a) => new Ability(a))
			};
		});
	}
}
