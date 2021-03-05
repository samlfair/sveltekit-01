<script context="module">
  import Client from '../../utilities/client'
  import { Predicates } from '@prismicio/client'
  import linkResolver from '../../utilities/linkResolver'
  import PrismicDom from 'prismic-dom'

  export async function load({ fetch, page }) {
    const { uid } = page.params;
    const response = await Client.query(Predicates.at('my.post.uid', uid))
    const document = response.results[0]
    return {
      props: {
        document,
      }
    };
  }
</script>

<script>
  export let document;
</script>

{@html document && PrismicDom.RichText.asHtml(document.data.title)}
{@html document && PrismicDom.RichText.asHtml(document.data.meta_description)}
<a href="/">« Home</a>