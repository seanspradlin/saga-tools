<script lang="ts">
	import { getRequiredAbilities, type Member } from '$lib/MemberBuilder.svelte';
	import { page } from '$app/stores';
	let { member }: { member: Member } = $props();
	import Delete from '~icons/mingcute/delete-line';
</script>

<div class="flex flex-row justify-between gap-4 p-2 border-b-2">
	<div class="flex items-center gap-2">
		<a href="/retinues/{$page.params.slug}/{member.characterId}" class="font-bold text-xl"
			>{member.name}</a
		>
		<button type="button"><Delete /></button>
	</div>
	<div class="flex flex-row flex-wrap gap-1 items-center justify-self-end rounded">
		{#each member.roles as role (role.role.id)}
			<div class="badge {role.unlocked ? 'badge-primary' : ''}">{role.role.name}</div>
		{/each}
	</div>
</div>
<div class="max-w-screen-md overflow-x-auto">
	<table class="table table-xs">
		<thead>
			<tr>
				<th>Learned</th>
				<th>Ability</th>
				<th>Weapon</th>
				<th>Roles</th>
			</tr>
		</thead>
		<tbody>
			{#each member.requiredAbilities as requiredAbility (requiredAbility.ability.id)}
				{@const ability = requiredAbility.ability}
				{@const roles = member.roles
					.filter((r) => r.role.requiredAbilities.map((e) => e.id).includes(ability.id))
					.map((r) => r.role.name)}
				<tr>
					<td>
						<form class="inline" method="POST" action="?/learnAbility">
							<input type="hidden" name="abilityId" value={ability.id} />
							<input type="hidden" name="characterId" value={member.characterId} />
							<input
								type="checkbox"
								class="checkbox"
								name="learned"
								checked={requiredAbility.learned}
							/>
						</form>
					</td>
					<td>{ability.name}</td>
					<td class="capitalize">{ability.type}</td>
					<td>{roles.join(', ')}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- <div class="font-bold">Ability</div>
	<div class="font-bold">Weapon</div>
	<div class="font-bold">Roles</div> -->
<!-- <div class="font-bold col-span-2">Glimmer Chart</div> -->

<!-- {#each member.remainingAbilities as ability (ability.id)}
		{@const roles = member.roles
			.filter((r) => r.role.requiredAbilities.map((e) => e.id).includes(ability.id))
			.map((r) => r.role.name)}
		<div class="col-start-1">{ability.name}</div>
		<div class="capitalize">{ability.type}</div>
		<div>
			{roles.join(', ')}
		</div> -->
<!-- {#if ability.glimmeredFrom.length}
			<div class="grid grid-cols-subgrid col-start-4 col-span-2 bg-base-300 rounded shadow-lg p-2">
				<div class="italic">Weapon Type</div>
				<div class="italic">Name</div>
				{#each ability.glimmeredFrom as chart}
					{#each chart.abilities as ablty (ablty.id)}
						<div class="capitalize">{chart.weaponType}</div>
						<div>{ablty.name}</div>
					{/each}
				{/each}
			</div>
		{/if} -->
<!-- {/each} -->
