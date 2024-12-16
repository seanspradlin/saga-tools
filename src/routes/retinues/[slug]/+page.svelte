<script lang="ts">
	import type { PageData } from './$types';
	import CharacterDetails from './CharacterDetails.svelte';
	import { Member } from '$lib/MemberBuilder.svelte';
	let { data }: { data: PageData } = $props();
	let members = data.members.map(
		(m) => new Member(m.characterId, m.desiredRoles, m.learnedAbilities)
	);
</script>

<h1 class="font-bold text-xl">{data.retinue.name}</h1>
{#if !members.length}
	<div>This retinue does not have any members.</div>
{:else}
	<div class="flex flex-col gap-16">
		{#each members as member (member.characterId)}
			<CharacterDetails {member} />
		{/each}
	</div>
{/if}
<form method="POST" action="?/addMember">
	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Add Member</span>
		</div>
		<select name="characterId" class="select select-bordered" required>
			<option disabled selected>Pick one</option>
			{#each data.possibleCharacters as option (option.value)}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
	</label>
	<button type="submit" class="btn btn-small">Add</button>
</form>
