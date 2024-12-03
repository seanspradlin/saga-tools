<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<h1 class="font-bold text-xl">{data.retinue.name}</h1>
