<script lang="ts">
	export let title;
	export let message;
	export let visits;

	let rotateX = 0;
	let rotateY = 0;
	const tiltDegree = 20;

	const handleMouseMove = (event: MouseEvent) => {
		// Dimensions of the card
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		// Calculate where to tilt
		rotateX = ((event.clientY - centerY) / centerY) * tiltDegree;
		rotateY = ((event.clientX - centerX) / centerX) * tiltDegree;
	};
</script>

<section aria-label="img" on:mousemove={handleMouseMove}>
	<div style="transform: rotateX({rotateX}deg) rotateY({rotateY}deg);">
		<h1>{title}</h1>
		<p>{message}</p>
		<p>{visits}</p>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		perspective: 1000px;
	}

	div {
		color: black;
		background-color: #f9f9f9;
		border-radius: 1rem;
		padding: 2em;
	}

	p {
		text-align: center;
	}
</style>
