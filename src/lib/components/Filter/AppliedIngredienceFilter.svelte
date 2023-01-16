<script lang="ts">
  import Close from '$components/Icons/Close.svelte'
  import { filter } from '$lib/stores'

  function removeIngredienceFilter(ingredience: string) {
    filter.set({
      ...$filter,
      mustContainIngrediences: $filter.mustContainIngrediences.filter((i) => i != ingredience)
    })
  }
</script>

{#each $filter.mustContainIngrediences as ingredience}
  <button
    class="flex items-center gap-1 rounded bg-primary px-2 text-background"
    on:click={() => {
      removeIngredienceFilter(ingredience)
    }}
  >
    <Close width={14} height={14} />
    {ingredience}
  </button>
{/each}
