import { learnableRoles, Role } from '$lib/data/roles';

interface RoleList {
	label: string;
	roles: Role[];
}
export const roleListData: RoleList[] = [
	{
		label: 'Attack Roles',
		roles: learnableRoles.filter((r) => r.type === 'attack').map((r) => new Role(r.id))
	},
	{
		label: 'Resistance Roles',
		roles: learnableRoles.filter((r) => r.type === 'resistance').map((r) => new Role(r.id))
	},
	{
		label: 'Positioning Roles',
		roles: learnableRoles.filter((r) => r.type === 'positioning').map((r) => new Role(r.id))
	},
	{
		label: 'Accuracy Roles',
		roles: learnableRoles.filter((r) => r.type === 'accuracy').map((r) => new Role(r.id))
	},
	{
		label: 'BP Boosting Roles',
		roles: learnableRoles.filter((r) => r.type === 'bpBoosting').map((r) => new Role(r.id))
	},
	{
		label: 'Shield Roles',
		roles: learnableRoles.filter((r) => r.type === 'shield').map((r) => new Role(r.id))
	},
	{
		label: 'Targeting Roles',
		roles: learnableRoles.filter((r) => r.type === 'targeting').map((r) => new Role(r.id))
	},
	{
		label: 'Ailment Resistance Roles',
		roles: learnableRoles.filter((r) => r.type === 'ailmentResistance').map((r) => new Role(r.id))
	},
	{
		label: 'Delay Roles',
		roles: learnableRoles.filter((r) => r.type === 'delay').map((r) => new Role(r.id))
	},
	{
		label: 'Status Boosting Roles',
		roles: learnableRoles.filter((r) => r.type === 'statusBoosting').map((r) => new Role(r.id))
	},
	{
		label: 'Attribute Boosting Roles',
		roles: learnableRoles.filter((r) => r.type === 'attributeBoosting').map((r) => new Role(r.id))
	},
	{
		label: 'Benison Roles',
		roles: learnableRoles.filter((r) => r.type === 'benison').map((r) => new Role(r.id))
	},
	{
		label: 'Misc Roles',
		roles: learnableRoles.filter((r) => r.type === 'misc').map((r) => new Role(r.id))
	}
];
