<script lang="ts">
  import type { Recipe } from '$types/recipe'

  export let data: { recipes: Recipe[] }

  let mustBeVegetarian = false
  let mustBeVegan = false
  let mustBeGlutenFree = false
</script>

<div>
  <h2>Filter</h2>
  <input type="checkbox" bind:value={mustBeVegetarian} />
  Vegetarisch
  <input type="checkbox" bind:value={mustBeVegan} /> Vegan
  <input type="checkbox" bind:value={mustBeGlutenFree} /> Glutenfrei
</div>

<div class="mt-8">
  <ul class="grid list-none grid-cols-3 gap-5">
    {#each data.recipes as recipe}
      <a href="/recipe/{recipe.slug}" title={recipe.title}
        ><li style="background-image: url('/images/{recipe.slug}.jpg')">
          <h3>{recipe.title}</h3>
        </li></a
      >
    {/each}
  </ul>
</div>

<style lang="postcss">
  ul li {
    @apply text-left;
    @apply h-96;
    @apply bg-cover;
    @apply bg-no-repeat;
    @apply bg-center;
    @apply align-bottom;
    @apply opacity-100;
    @apply hover:opacity-90;
    @apply transition-all;
    @apply hover:scale-105;
  }

  ul li h3 {
    @apply font-handwriting;
    @apply text-colorPrimary;
    @apply bg-white;
    @apply text-2xl;
    @apply w-full;
    @apply px-6;
    @apply inline;
    @apply shadow-xl;
  }
</style>
