<script lang="ts">
  import type { Recipe } from '$types/recipe'
  import NutritionalConcept from '$components/NutritionalConcept.svelte'
  import IngredienceList from '$components/IngredienceList.svelte'
  import InstructionSteps from '$components/InstructionSteps.svelte'

  export let data: Recipe
  let amountOfServings: number = data.amountOfServings

  $: factor = amountOfServings / data.amountOfServings
</script>

<svelte:head>
  <title>{data.title} | Cookbook</title>
</svelte:head>

<img src={data.imagePath} title={data.title} alt={data.title} />

<h1 class="my-6 font-handwriting text-3xl text-secondaryAccent">{data.title}</h1>

<NutritionalConcept recipe={data} />

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
<IngredienceList recipe={data} bind:factor />

<h2>Anleitung</h2>
<InstructionSteps recipe={data} />

<style lang="postcss">
  h2 {
    @apply my-4 font-bold;
  }
</style>
