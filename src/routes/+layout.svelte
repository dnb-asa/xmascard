<script>
	import '../global.css';

	import Snowfall from '$lib/components/snow/Snowfall.svelte';
	import Tree from '$lib/components/Tree.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();

	let { children } = $props();
</script>

<Snowfall />
<Tree />

<main>
	{@render children?.()}
</main>

<style>
	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
