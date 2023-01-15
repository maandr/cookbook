<script lang="ts">
  import Filter from '$components/Filter.svelte'
  import Card from '$components/Recipe/Card.svelte'
  import { filtered } from '$lib/stores'
</script>

<Filter />

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
