<script lang="ts">
	import { enhance } from '$app/forms';
	import QrButton from './QrButton.svelte';

	let { data } = $props();
</script>

<article>
	<nav>
		<a href="/">Back</a>
		{#if data.key}
			<a href="/{data.key}">Go to card</a>
		{/if}
	</nav>

	{#if data.key}
		<h1>Sprinkle some more x-mas spirit on dat!</h1>
		<QrButton key={data.key} />
	{:else}
		<h1>Create a new xmas card!</h1>
	{/if}

	<form
		use:enhance
		action="?/{data.key ? 'editcard' : 'createcard'}"
		method="POST"
		autocomplete="off"
	>
		<label for="title">Title</label>
		<input type="text" name="title" required value={data.title} />
		<label for="message">Message</label>
		<textarea name="message" rows="5" maxlength="400">{data.message}</textarea>
		<button type="submit">{data.key ? 'Update' : 'Create!'}</button>
	</form>
</article>

<style>
	nav {
		display: flex;
		justify-content: space-between;
	}

	article {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
	}

	textarea {
		resize: none;
	}

	form {
		border: 2px solid rgba(0, 0, 0, 0.125);
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);

		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.25rem;
	}
</style>
