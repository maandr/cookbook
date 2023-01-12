<script lang="ts">
  import type { Recipe } from '$types/recipe'

  export let recipe: Recipe
</script>

<img src={recipe.imagePath} title={recipe.title} alt={recipe.title} />

<h1 class="my-6 font-handwriting text-3xl text-colorSecondaryAccent">{recipe.title}</h1>

<h2>Zutaten</h2>
<table>
  {#each recipe.ingrediences as ingredience}
    <tr>
      <td class="pr-4 text-right text-colorSecondaryAccent"
        >{#if ingredience.quantity}{ingredience.quantity.amount}
          {ingredience.quantity.unit}{/if}</td
      >
      <td class:italic={!ingredience.required} class:text-colorPrimary={!ingredience.required}
        >{ingredience.name}</td
      >
    </tr>
  {/each}
</table>

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
