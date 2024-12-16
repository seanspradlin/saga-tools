import { Character } from './data/characters';
import { Ability } from './data/abilities';
import { Role } from './data/roles';

export function getLearnableRoles(learnableRoleIds: string[]) {
	return learnableRoleIds.map((roleId) => new Role(roleId));
}

export function getCharacter(characterId: string) {
	return new Character(characterId);
}

export function getLearnedAbilities(learnedAbilityIds: string[]) {
	return learnedAbilityIds.map((abilityId) => new Ability(abilityId));
}

export function getAllRoles(
	characterId: string,
	learnableRoleIds: string[],
	learnedAbilityIds: string[]
) {
	const r: { role: Role; unlocked: boolean }[] = [];
	const character = getCharacter(characterId);
	character.roles.forEach((role) => r.push({ role, unlocked: true }));
	const learnableRoles = getLearnableRoles(learnableRoleIds);
	learnableRoles.forEach((role) => {
		r.push({
			role,
			unlocked: role.requiredAbilities.every((ab) => learnedAbilityIds.includes(ab.id))
		});
	});
	return r;
}

export function getRequiredAbilities(learnableRoleIds: string[], learnedAbilities: string[]) {
	const abilities: { [key: string]: { learned: boolean; ability: Ability } } = {};
	const learnableRoles = getLearnableRoles(learnableRoleIds);
	learnableRoles.forEach((role) => {
		role.requiredAbilities.forEach((ability) => {
			abilities[ability.id] = {
				ability,
				learned: learnedAbilities.includes(ability.id)
			};
		});
	});
	return Object.values(abilities).sort((a, b) => {
		if (a.ability.type === b.ability.type) {
			return a.ability.name > b.ability.name ? 1 : -1;
		}
		return a.ability.type > b.ability.type ? 1 : -1;
	});
}

export class Member {
	character: Character;
	learnableRoleIds: string[] = $state([]);
	learnedAbilityIds: string[] = $state([]);

	constructor(
		public characterId: string,
		learnableRoleIds: string[],
		learnedAbilityIds: string[]
	) {
		this.character = getCharacter(characterId);
		this.learnableRoleIds = learnableRoleIds;
		this.learnedAbilityIds = learnedAbilityIds;
	}

	get learnableRoles() {
		return getLearnableRoles(this.learnableRoleIds);
	}

	get learnedAbilities() {
		return getLearnedAbilities(this.learnedAbilityIds);
	}

	get roles() {
		return getAllRoles(this.characterId, this.learnableRoleIds, this.learnedAbilityIds);
	}

	get requiredAbilities() {
		return getRequiredAbilities(this.learnableRoleIds, this.learnedAbilityIds);
	}

	get name() {
		return this.character.name;
	}
}
