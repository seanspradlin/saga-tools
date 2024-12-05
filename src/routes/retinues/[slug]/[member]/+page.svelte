<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { setMember } from './member.svelte';
	import RoleList from './RoleList.svelte';
	import AbilitiesTable from './AbilitiesTable.svelte';
	let { data }: { data: PageData } = $props();
	const member = setMember(data.member);
</script>

<form method="POST">
	<div class="flex flex-row justify-between items-center mb-4">
		<h2 class="text-2xl font-bold">{member.name}</h2>
		<div class="flex flex-row gap-4">
			<a href="/retinues/{$page.params.slug}" class="btn btn-outline btn-sm">Back</a>
			<button type="submit" class="btn btn-primary btn-sm">Save</button>
		</div>
	</div>
	<hr />
	<div class="flex flex-col-reverse lg:flex-row w-full">
		<RoleList />
		<hr class="divider divider-vertical lg:divider-horizontal" />
		<AbilitiesTable />
	</div>
</form>
