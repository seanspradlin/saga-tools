<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	let { children } = $props();
</script>

<div class="bg-base flex min-h-screen flex-col text-base">
	<Header />
	<main class="container mx-auto h-full flex-grow p-8">
		{@render children?.()}
	</main>
	<Footer />
</div>
