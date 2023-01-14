<script lang="ts">
  import NutritionalConcept from '$components/Recipe/NutritionalConcept.svelte'
  import Ingrediences from '$components/Recipe/Ingrediencs.svelte'
  import Instructions from '$components/Recipe/Instructions.svelte'
  import PreperationTime from '$components/Recipe/PreperationTime.svelte'

  export let data: Recipe
  let amountOfServings: number = data.amountOfServings

  $: factor = amountOfServings / data.amountOfServings
</script>

<svelte:head>
  <title>{data.title} | Cookbook</title>
</svelte:head>

<h1 class="my-6 font-handwriting text-3xl text-secondaryAccent">{data.title}</h1>

<div class="xl:float-right xl:m-6">
  <img src={data.imagePath} title={data.title} alt={data.title} class="mb-8 max-w-xl" />
</div>

<div class="flex gap-2">
  <PreperationTime recipe={data} />
  <NutritionalConcept recipe={data} />
</div>

<h2>Portionen</h2>
<input
  type="number"
  bind:value={amountOfServings}
  min="1"
  max="15"
  step="1"
  class="rounded border-2 border-background bg-secondary p-1 text-center text-primaryAccent outline-none focus:border-secondaryAccent"
/>
<input type="range" bind:value={amountOfServings} min="1" max="16" step="1" class="mx-4" />

<h2>Zutaten</h2>
<Ingrediences recipe={data} bind:factor />

<h2>Anleitung</h2>
<Instructions recipe={data} />

<style lang="postcss">
  h2 {
    @apply my-4 font-bold;
  }
</style>
