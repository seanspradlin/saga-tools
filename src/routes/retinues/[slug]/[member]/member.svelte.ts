import { Member } from '$lib/character-builder.svelte';

let member: Member = $state(new Member('urpina', [], []));

export function setMember(props: {
	characterId: string;
	desiredRoles: string[];
	learnedAbilities: string[];
}) {
	member = new Member(props.characterId, props.desiredRoles, props.learnedAbilities);
	return member;
}

export function getMember() {
	return member;
}
