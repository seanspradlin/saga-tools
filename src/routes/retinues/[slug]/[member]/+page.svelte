<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { Member } from '$lib/MemberBuilder.svelte';
	import RoleList from './RoleList.svelte';
	import AbilitiesTable from './AbilitiesTable.svelte';
	let { data }: { data: PageData } = $props();
	const member = new Member(
		data.member.characterId,
		data.member.desiredRoles,
		data.member.learnedAbilities
	);
	let isSubmitting = $state(false);
</script>

<form
	method="POST"
	use:enhance={() => {
		isSubmitting = true;
		return async ({ update }) => {
			isSubmitting = false;
			await update({ reset: false });
		};
	}}
>
	<div class="flex flex-row justify-between items-center mb-4">
		<h2 class="text-2xl font-bold">{member.character.name}</h2>
		<div class="flex flex-row gap-4">
			<a href="/retinues/{$page.params.slug}" class="btn btn-outline btn-sm">Back</a>
			<button type="submit" class="btn btn-primary btn-sm" disabled={isSubmitting}>Save</button>
		</div>
	</div>
	<hr />
	<div class="flex flex-col-reverse lg:flex-row w-full">
		<RoleList {member} />
		<hr class="divider divider-vertical lg:divider-horizontal" />
		<AbilitiesTable {member} />
	</div>
</form>
