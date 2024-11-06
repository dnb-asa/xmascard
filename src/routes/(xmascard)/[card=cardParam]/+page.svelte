<script>
	import Card from '$lib/components/card/Card.svelte';
	export let data;
</script>

<Card title={data.title} message={data.message} visits={data.views} />
