<script context="module">
  import Client from '../../utilities/client'
  import Prismic from '@prismicio/client'
  import linkResolver from '../../utilities/linkResolver'
  import PrismicDom from 'prismic-dom'

  export async function load({ fetch, page }) {
    const response = await Client.query(Prismic.Predicates.at('document.type', 'post'))
		const {results} = response
    return {
      props: {
        results,
      }
    };
  }
</script>

<script>
  export let results;
</script>

<h1>Home</h1>
<ul>
	{#each results as result}
	<li><a href={linkResolver(result)}>{PrismicDom.RichText.asText(result.data.title)}</a></li>
	{:else}
	<li>Please publish some posts.</li>
	{/each}
</ul>

<!-- Extra info -->
<div class="infobox">
		<h2>
			Resources for building with Svelte:
		</h2>
<ul>
	<li>
		<a href="https://sveltesociety.dev/cheatsheet/">Svelte Society's Svelte Cheatsheet</a>
	</li>
	<li>
		<a href="https://sk-incognito.vercel.app/learn/everything">Incognito SvelteKit Docs</a>
	</li>
</ul>
</div>

<style>
	.infobox {
		background: #ddd;
		padding: 10px;
		font-style: oblique;
	}
</style>