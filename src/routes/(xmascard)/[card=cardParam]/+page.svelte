<script>
	import Card from '$lib/components/card/Card.svelte';
	import Envelope from '$lib/components/Envelope.svelte';
	export let data;
</script>

<div class="container">
<Card title={data.title} message={data.message} visits={data.views} />
	</Envelope>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
	}

	Envelope {
		max-width: 400px;
		padding: 200px;
	}
</style>