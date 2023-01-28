<script lang="ts">
  import { distict } from '$lib/utils/arrayHelpers'
  import { filter } from '$lib/stores'
  import { INGREDIENCE_PREFABS } from '$lib/constants'
  import Close from '$components/Icons/Close.svelte'

  let input: string
  let isPrefacsShowing = false

  function add(ingredience: string) {
    filter.set({
      ...$filter,
      mustContainIngrediences: distict([...$filter.mustContainIngrediences, ingredience])
    })
    isPrefacsShowing = false
  }

  function remove(ingredience: string) {
    filter.set({
      ...$filter,
      mustContainIngrediences: $filter.mustContainIngrediences.filter((i) => i != ingredience)
    })
  }
</script>

<div class="mt-4 flex w-full flex-col gap-3">
  <div class="relative w-full rounded-lg bg-surfaceAccent p-2 px-3 pl-12 text-primaryAccent">
    <input
      class="w-full bg-transparent outline-none placeholder:text-secondary"
      type="text"
      placeholder="Zutat"
      bind:value={input}
      on:change={() => {
        add(input)
        input = ''
      }}
    />
    <div class="center absolute left-0 top-0 bottom-0 w-[42px]">
      <button on:click={() => (isPrefacsShowing = !isPrefacsShowing)}>🤔</button>
    </div>
    {#if isPrefacsShowing}
      <div
        class="absolute left-0 right-0 bottom-0 flex max-h-[0px] flex-wrap gap-2 rounded-lg bg-surface"
        class:is-showing={isPrefacsShowing}
      >
        {#each INGREDIENCE_PREFABS as prefab}
          <button
            on:click={() => add(prefab.value)}
            title={prefab.value}
            class="p-2 hover:scale-125">{prefab.key}</button
          >
        {/each}
      </div>
    {/if}
  </div>

  <div class="flex flex-row flex-wrap gap-1">
    {#each $filter.mustContainIngrediences as ingredience}
      <button
        class="flex items-center justify-center gap-1 rounded bg-primary px-2 text-sm text-background"
        on:click={() => {
          remove(ingredience)
        }}
      >
        <Close width={14} height={14} />
        {ingredience}
      </button>
    {/each}
  </div>
</div>

<style lang="postcss">
  .is-showing {
    @apply max-h-[500px];
  }
</style>
