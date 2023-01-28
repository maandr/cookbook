<script lang="ts">
  import { filter } from '$lib/stores'
  import { containsAll } from '$lib/utils/arrayHelpers'

  export let tags: string[]

  function filterForTags(tags: string[]) {
    if (containsAll($filter.mustHaveTags, tags)) {
      filter.set({ ...$filter, mustHaveTags: [] })
    } else {
      filter.set({ ...$filter, mustHaveTags: tags })
    }
  }
</script>

<button
  on:click={() => filterForTags(tags)}
  class="center flex-col gap-2 p-2 text-xs font-semibold md:p-3"
  class:enabled={containsAll($filter.mustHaveTags, tags)}
>
  <slot />
</button>

<style lang="postcss">
  .enabled {
    @apply rounded bg-primary text-primaryContrast;
  }
</style>
