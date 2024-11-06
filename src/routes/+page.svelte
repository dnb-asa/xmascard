<script lang="ts">
	let { data } = $props();
	console.log(data)
</script>


{#snippet deleter(key: string)}
	<form action="?/forgetcard" method="POST">
		<input type="hidden" name="key" value={key} />
		<button type="submit">remove</button>
	</form>
{/snippet}

<article>
	<a href="/create">create a new xmas card!</a>

	{#if data.cards}
		<section>
			<h1>Known lists</h1>
			<ul>
				{#each data.cards as { title, views, key }}
					<li>
						<a href="/{key}">
							{title}
						</a>
						<p>{views}</p>
						{@render deleter(key)}
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>
<style>
	article {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
	}
	article > a {
			background-color: aliceblue;
			padding: 1rem;
			border-radius: 1rem;
			color: blue;
	}

	ul {
			display: flex;
			flex-direction: column;
			color: blue;
	}

	li {
			display: flex;
			justify-content: space-between;
			align-items: center; 
			background-color: white;
	}


	li p {
			margin: 0;
	}
</style>