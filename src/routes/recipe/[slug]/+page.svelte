<script lang="ts">
  import { onMount } from 'svelte'
  import { recipesBySlug } from '$lib/stores'
  import Ingrediences from '$components/Recipe/Ingrediencs.svelte'
  import Instructions from '$components/Recipe/Instructions.svelte'
  import NutritionalConcept from '$components/Recipe/NutritionalConcept.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import PreperationTime from '$components/Recipe/PreperationTime.svelte'
  import Dots from '$components/Icons/Dots.svelte'

  export let data: { slug: string }

  let amountOfServings = 4

  $: recipe = $recipesBySlug[data.slug]
  $: factor = amountOfServings / recipe.amountOfServings

  onMount(() => {
    amountOfServings = recipe.amountOfServings
  })
</script>

<svelte:head>
  <title>{recipe.title}</title>
</svelte:head>

<div class="relative">
  <div class="items-middle my-4 flex flex-wrap justify-start gap-y-4 gap-x-2">
    <h1 class="flex-grow font-handwriting text-3xl font-bold text-primary">{recipe.title}</h1>
    <PreperationTime {recipe} />
    <NutritionalConcept {recipe} />
    <a href={`/editor/${recipe.slug}`}><Dots /></a>
  </div>

  <img
    src={recipe.imagePath}
    title={recipe.title}
    alt={recipe.title}
    class="my-8 max-w-full md:max-w-[1024px]"
  />
</div>

<div class="my-8 flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-0">
  <div class="border-surface md:col-span-5 md:border-r-[1px]">
    <h2>Zutaten</h2>
    <div class="rounde my-5 flex items-center gap-2 p-2">
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
      <input
        type="range"
        bind:value={amountOfServings}
        min="1"
        max="16"
        step="1"
        class="mx-2 w-40"
      />
    </div>
    <Ingrediences {recipe} bind:factor />
  </div>
  <div class="md:col-span-7">
    <h2>Anleitung</h2>
    <Instructions {recipe} />
  </div>
</div>

<style lang="postcss">
  h2 {
    @apply mb-4 border-t-[1px] border-b-[1px] border-surface p-4 text-sm font-bold;
  }
</style>
