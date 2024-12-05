<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		label,
		selected = 0,
		children
	}: { label: string; selected: number; children: Snippet } = $props();
</script>

<div class="collapse collapse-plus border-base-300 border bg-base-200">
	<input type="checkbox" />
	<div class="collapse-title title-xl font-medium">
		{label}
		{#if selected}
			<div class="badge badge-primary">{selected}</div>
		{/if}
	</div>
	<div class="collapse-content">
		{@render children()}
	</div>
</div>
