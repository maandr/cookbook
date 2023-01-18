<script lang="ts">
  import { onMount } from 'svelte'
  import { recipesBySlug } from '$lib/stores'
  import Edit from '$components/Icons/Edit.svelte'
  import Ingrediences from '$components/Recipe/Ingrediencs.svelte'
  import Instructions from '$components/Recipe/Instructions.svelte'
  import NutritionalConcept from '$components/Recipe/NutritionalConcept.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import PreperationTime from '$components/Recipe/PreperationTime.svelte'

  export let data: { slug: string }

  let amountOfServings = 4

  $: recipe = $recipesBySlug[data.slug]
  $: factor = amountOfServings / recipe.amountOfServings

  onMount(() => {
    amountOfServings = recipe.amountOfServings
  })
</script>

<svelte:head>
  <title>{recipe.title} | Cookbook</title>
</svelte:head>

<div class="items-middle my-6 flex flex-wrap gap-2">
  <a href={`/editor/${recipe.slug}`} class="hover:scale-125"><Edit /></a>
  <h1 class="font-handwriting text-3xl text-secondaryAccent">{recipe.title}</h1>
</div>

<div class="xl:float-right xl:m-6">
  <img
    src={recipe.imagePath}
    title={recipe.title}
    alt={recipe.title}
    class="my-6 max-w-full md:m-8 md:max-w-lg"
  />
</div>

<div class="flex gap-2">
  <PreperationTime {recipe} />
  <NutritionalConcept {recipe} />
</div>

<h2>Portionen</h2>
<div class="rounde px- flex items-center gap-2 p-2">
  <Portion width={20} height={20} />
  <input
    type="number"
    bind:value={amountOfServings}
    min="1"
    max="15"
    step="1"
    title="Portionen"
    class="bg-transparent p-1 text-center outline-none"
  />
  <input type="range" bind:value={amountOfServings} min="1" max="16" step="1" class="mx-2 w-40" />
</div>

<h2>Zutaten</h2>
<Ingrediences {recipe} bind:factor />

<h2>Anleitung</h2>
<Instructions {recipe} />

<style lang="postcss">
  h2 {
    @apply my-4 font-bold;
  }
</style>
