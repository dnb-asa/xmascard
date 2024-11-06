<script lang="ts">
	import { onMount } from 'svelte';

	let countdown = '';

	function updateCountdown() {
		const now = new Date();
		const christmas = new Date(now.getFullYear(), 11, 24);

		if (now > christmas) {
			christmas.setFullYear(christmas.getFullYear() + 1);
		}

		const diff = christmas.getTime() - now.getTime();

		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);

		countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	}

	onMount(() => {
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>
<div class="countdown">
	Christmas Countdown: {countdown}
</div>

<style>
	.countdown {
		font-size: 1.5em;
		color: white;
		display:flex;
		justify-content: center;
		margin-top: 2rem;
	}
</style>
