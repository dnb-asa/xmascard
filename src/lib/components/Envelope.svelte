<script>
	// @ts-nocheck

	let { children } = $props();
	let showCard = $state(false);
</script>

<article class:showCard>
	<button
		class="flap"
		onclick={() => (showCard = true)}
		aria-label="open envelope flap"
	>
	</button>
	<div>
		{@render children()}
	</div>
</article>

<style>
	article {
		background-color: rgb(185, 64, 64);
		position: relative;
		overflow: visible;

		padding: 1rem;

		margin: auto;
	}

	button {
		appearance: none;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		margin: 0 auto;

		width: 100%;
		height: 100%;

		background-color: gainsboro;

		clip-path: polygon(50% 40%, 0 0, 100% 0);

		transform-origin: center top;
		transition: transform 0.5s;
	}

	div {
		opacity: 0;
		transition: all 0.5s;
	}

	:not(.showCard) div {
		pointer-events: none;
		transform: scale(0.9) translateY(10px);
	}

	.showCard div {
		opacity: 1;
	}

	.showCard button {
		transform: rotateX(-180deg);
	}
</style>
