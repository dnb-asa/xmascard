<script>
	import Card from '$lib/components/card/Card.svelte';
	import Envelope from '$lib/components/Envelope.svelte';
	export let data;
</script>

<Envelope>
	<Card title={data.title} message={data.message} visits={data.views} />
</Envelope>
