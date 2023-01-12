<script lang="ts">
  import RecipeCard from '$components/RecipeCard.svelte'
  import type { Recipe } from '$types/recipe'

  export let data: { recipes: Recipe[] }
</script>

<div class="mt-8">
  <div
    class="grid list-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
  >
    {#each data.recipes as recipe}
      <RecipeCard {recipe} />
    {/each}
  </div>
</div>
