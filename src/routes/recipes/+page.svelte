<script lang="ts">
  import AppliedIngredienceFilter from '$components/Filter/AppliedIngredienceFilter.svelte'
  import IngredienceFilterInput from '$components/Filter/IngredienceFilterInput.svelte'
  import NutritionalConceptToggles from '$components/Filter/NutritionalConceptToggles.svelte'
  import Card from '$components/Recipe/Card.svelte'
  import { filtered } from '$lib/stores'
</script>

<IngredienceFilterInput />

<div class="my-4 flex flex-wrap gap-2">
  <NutritionalConceptToggles />
  <AppliedIngredienceFilter />
</div>

<div class="mt-8">
  <div
    class="grid list-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
  >
    {#if $filtered.length === 0}
      <p>Leider keine Treffer 😢</p>
    {:else}
      {#each $filtered as recipe}
        <Card {recipe} />
      {/each}
    {/if}
  </div>
</div>
