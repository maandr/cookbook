<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { distict } from '$lib/utils/arrayHelpers'
  import Close from '$components/Icons/Close.svelte'
  import Tags from '$components/Icons/Tags.svelte'

  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let tabindex: number | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let tags: string[]

  const dispatch = createEventDispatcher()

  let input = ''
  let hasFocus = false
</script>

<div
  class="flex flex-row items-center gap-2 border-2 border-surface bg-white p-3"
  class:focus={hasFocus}
>
  <Tags width={18} height={18} />
  <div class="flex flex-row flex-wrap gap-2">
    {#each tags as tag}
      <button
        class="center gap-1 rounded bg-primary px-2 text-background"
        on:click={() => {
          tags = tags.filter((t) => t != tag)
          dispatch('change', { tags })
        }}
      >
        <Close width={12} height={12} />{tag}
      </button>
    {/each}
    <input
      class="bg-transparenttext-sm max-w-[120px] flex-grow outline-none"
      {id}
      {name}
      {tabindex}
      {placeholder}
      bind:value={input}
      on:focus={() => (hasFocus = true)}
      on:blur={() => (hasFocus = false)}
      on:change={() => {
        tags = distict([...tags, input]).filter((tag) => tag.trim() !== '')
        dispatch('change', { tags })
        input = ''
      }}
    />
  </div>
</div>

<style lang="postcss">
  .focus {
    @apply border-primary;
  }
</style>
