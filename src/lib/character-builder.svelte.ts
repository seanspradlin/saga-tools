import { Character } from './data/characters';
import { Ability } from './data/abilities';
import { Role } from './data/roles';

export class Member {
	private character: Character;
	learnableRoleIds: string[] = $state([]);
	learnedAbilityIds: string[] = $state([]);

	constructor(
		public id: string,
		learnableRoleIds: string[],
		learnedAbilityIds: string[]
	) {
		this.character = new Character(id);
		this.learnableRoleIds = learnableRoleIds;
		this.learnedAbilityIds = learnedAbilityIds;
	}

	get learnableRoles() {
		return this.learnableRoleIds.map((roleId) => new Role(roleId));
	}

	get learnedAbilities() {
		return this.learnedAbilityIds.map((abilityId) => new Ability(abilityId));
	}

	get roles() {
		const r: { role: Role; unlocked: boolean }[] = [];
		this.character.roles.forEach((role) => r.push({ role, unlocked: true }));
		this.learnableRoles.forEach((role) => {
			r.push({
				role,
				unlocked: role.requiredAbilities.every((ab) => this.learnedAbilityIds.includes(ab.id))
			});
		});
		return r;
	}

	get requiredAbilities() {
		const abilities: { [key: string]: Ability } = {};
		this.learnableRoles.forEach((role) => {
			role.requiredAbilities.forEach((ability) => {
				abilities[ability.id] = ability;
			});
		});
		return Object.values(abilities).sort((a, b) => {
			if (a.type === b.type) {
				return a.name > b.name ? 1 : -1;
			}
			return a.type > b.type ? 1 : -1;
		});
	}

	get remainingAbilities() {
		return this.requiredAbilities.filter((ability) => !this.learnedAbilityIds.includes(ability.id));
	}

	get name() {
		return this.character.name;
	}
}
