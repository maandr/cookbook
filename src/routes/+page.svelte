<script lang="ts">
  import { filtered } from '$lib/stores'
  import ContextBar from '$components/ContextBar.svelte'
  import FilterMenu from '$components/Filter/FilterMenu.svelte'
  import RecipeCard from './RecipeCard.svelte'
</script>

<ContextBar>
  <FilterMenu />
</ContextBar>

<div class="mt-8 grid list-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
  {#if $filtered.length === 0}
    <p>Leider keine Treffer 😢</p>
  {:else}
    {#each $filtered as recipe}
      <RecipeCard {recipe} />
    {/each}
  {/if}
</div>
