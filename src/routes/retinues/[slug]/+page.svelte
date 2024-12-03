<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<h1 class="font-bold text-xl">{data.retinue.name}</h1>
<ul>
	{#each data.members as member (member.id)}
		<li>
			<a href="/retinues/{data.retinue.slug}/{member.id}">{member.name}</a>
			<form method="POST" action="?/removeMember">
				<input type="hidden" value={member.id} name="characterId" />
				<button type="submit">Remove</button>
			</form>
		</li>
	{/each}
</ul>

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
