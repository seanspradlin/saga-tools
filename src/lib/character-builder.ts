import { Character } from './data/characters';
import { Ability } from './data/abilities';
import { Role } from './data/roles';

export class Member {
	private character: Character;
	public learnableRoles: Role[];
	public learnedAbilities: Ability[];

	constructor(
		public id: string,
		public learnableRoleIds: string[],
		public learnedAbilityIds: string[]
	) {
		this.character = new Character(id);
		this.learnableRoles = learnableRoleIds.map((roleId) => new Role(roleId));
		this.learnedAbilities = learnedAbilityIds.map((abilityId) => new Ability(abilityId));
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

// export async function serializeMember(memberId: string, desiredRoleIds: string[], learnedAbilityIds: string[]) {
//   const member = new Member(memberId, desiredRoleIds, learnedAbilityIds)
//   return {
//     id: member.id,
//     name: member.name,
//     roles: member.roles,

//   }
// }
