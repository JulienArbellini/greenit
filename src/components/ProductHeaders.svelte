<script lang="ts">
    export let id: string;
</script>

<svelte:head>
  <title>Tesla - Model {id.toUpperCase()}</title>
  <meta
    name="description"
    content="Information about the Tesla Model {id.toUpperCase()}." />

  <meta
    name="twitter:card"
    content="summary_large_image" />
  <meta
    name="twitter:description"
    content="Information about the Tesla Model {id.toUpperCase()}." />
  <meta
    name="twitter:title"
    content="Tesla - Model {id}" />
  <meta
    name="twitter:url"
    content="https://tesla.birdi.ng/model-{id}" />

  <meta
    property="og:title"
    content="Tesla - Model {id}" />
  <meta
    property="og:description"
    content="Information about the Tesla Model {id.toUpperCase()}." />
  <meta
    property="og:type"
    content="website" />
  <meta
    property="og:image"
    content="/images/home/hero-model-{id}.jpg" />
</svelte:head>
