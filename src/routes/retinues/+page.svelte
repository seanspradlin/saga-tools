<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<h1>Retinues</h1>
<ul>
	{#each data.retinues as retinue}
		<li><a href="/retinues/{retinue.slug}">{retinue.name}</a></li>
	{/each}
</ul>
<a class="btn btn-primary" href="/retinues/create">Create a new Retinue</a>
