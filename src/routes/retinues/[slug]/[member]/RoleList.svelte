<script lang="ts">
	import RoleListGroup from './RoleListGroup.svelte';
	import { getMember } from './member.svelte';
	const member = getMember();
	import { roleListData } from './roleListData';
</script>

<fieldset class="flex flex-col gap-4">
	<legend class="text-lg">Desired Roles</legend>
	{#each roleListData as roleGroup (roleGroup.label)}
		{@const selected: number = roleGroup.roles.reduce((acc, el) => {
      if (member.learnableRoleIds.includes(el.id)) {
        acc += 1
      }
      return acc
    }, 0)}
		<RoleListGroup label={roleGroup.label} {selected}>
			{#each roleGroup.roles as role (role.id)}
				<label class="grid gap-x-2 grid-cols-[min-content_auto]">
					<input
						name="desiredRoles"
						type="checkbox"
						value={role.id}
						bind:group={member.learnableRoleIds}
					/>
					<p class="font-bold">{role.name}</p>
					<p class="col-start-2">{role.description}</p>
				</label>
			{/each}
		</RoleListGroup>
	{/each}
</fieldset>
