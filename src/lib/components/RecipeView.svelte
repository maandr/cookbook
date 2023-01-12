<script lang="ts">
  import type { Recipe } from '$types/Recipe'
  import NutritionalConcept from '$components/NutritionalConcept.svelte'
  import IngredienceList from '$components/IngredienceList.svelte'

  export let recipe: Recipe
</script>

<img src={recipe.imagePath} title={recipe.title} alt={recipe.title} />

<h1 class="my-6 font-handwriting text-3xl text-colorSecondaryAccent">{recipe.title}</h1>

<NutritionalConcept {recipe} />

<h2>Zutaten</h2>
<IngredienceList {recipe} />

<h2>Anleitung</h2>
<ol class="list-outside list-decimal pl-7">
  {#each recipe.instructions as instruction}
    <li class="py-2 pl-4">{instruction}</li>
  {/each}
</ol>

<style lang="postcss">
  h2 {
    @apply my-4;
    @apply font-bold;
  }
</style>
