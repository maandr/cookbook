<script lang="ts">
  import { filter, filtered } from '$lib/stores'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import IngredienceFilterInput from './IngredienceFilterInput.svelte'
  import IngredienceFilters from './IngredienceFilters.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import RecipeCard from './RecipeCard.svelte'
  import ToggleButton from '$components/Forms/ToggleButton.svelte'
</script>

<IngredienceFilterInput />

<div class="my-4 flex flex-wrap gap-2">
  <ToggleButton bind:value={$filter.meatAllowed}>
    <Meat />
    <p class="hidden xl:block">Fleisch</p>
  </ToggleButton>
  <ToggleButton bind:value={$filter.fishAllowed}>
    <Fish />
    <p class="hidden xl:block">Fisch</p>
  </ToggleButton>
  <ToggleButton bind:value={$filter.glutenAllowed}>
    <Gluten />
    <p class="hidden xl:block">Gluten</p>
  </ToggleButton>
  <ToggleButton bind:value={$filter.lactoseAllowed}>
    <Cheese />
    <p class="hidden xl:block">Laktose</p>
  </ToggleButton>
  <ToggleButton bind:value={$filter.alcoholAllowed}>
    <Alcohol />
    <p class="hidden xl:block">Alkohol</p>
  </ToggleButton>
  <IngredienceFilters />
</div>

<div
  class="mt-8 grid list-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
>
  {#if $filtered.length === 0}
    <p>Leider keine Treffer 😢</p>
  {:else}
    {#each $filtered as recipe}
      <RecipeCard {recipe} />
    {/each}
  {/if}
</div>
