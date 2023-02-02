<script lang="ts">
  import { filtered, isLoading, recipes } from '$lib/stores'
  import ContextBar from '$components/ContextBar.svelte'
  import FilterMenu from '$components/Filter/FilterMenu.svelte'
  import RecipeCard from '../lib/components/Recipe/RecipeCard.svelte'
  import { onMount } from 'svelte'

  export let data: Result<Recipe[]>

  onMount(() => {
    recipes.set(data.payload)
    isLoading.set(false)
  })
</script>

<ContextBar>
  <FilterMenu />
</ContextBar>

<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
  {#if $filtered.length === 0}
    <p class="col-span-1 w-full text-center text-secondary md:col-span-2 xl:grid-cols-3">
      Es gab leider keine Treffer für die aktuelle Suche.
    </p>
  {:else}
    {#each $filtered as recipe}
      <RecipeCard {recipe} />
    {/each}
  {/if}
</div>
