<script lang="ts">
  import { filter } from '$lib/stores'
  import Close from '$components/Icons/Close.svelte'

  function remove(ingredience: string) {
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
      remove(ingredience)
    }}
  >
    <Close width={14} height={14} />
    {ingredience}
  </button>
{/each}
