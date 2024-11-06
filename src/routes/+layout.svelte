<script>
	import '../global.css';
	import Snowfall from '$lib/components/snow/Snowfall.svelte';
	import Countdown from '$lib/components/countdown/Countdown.svelte';
	import Tree from '$lib/components/Tree.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();

	let { children } = $props();
</script>

<Snowfall />
<Tree />

<main>
<Countdown />
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
