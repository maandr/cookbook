<script lang="ts">
  import { distict } from '$lib/utils/arrayHelpers'
  import Close from '$components/Icons/Close.svelte'
  import Tags from '$components/Icons/Tags.svelte'

  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let tabindex: number | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let tags: string[]
  export let onChange: ((value: string[]) => void) | undefined = undefined

  let input = ''
  let hasFocus = false
</script>

<div
  class="flex items-center gap-2 border-2 border-surfaceAccent bg-white p-3"
  class:focus={hasFocus}
>
  <Tags width={22} height={22} />
  <div class="flex flex-wrap gap-2 pl-2">
    {#each tags as tag}
      <button
        class="center gap-1 rounded bg-primary px-2 text-background"
        on:click={() => {
          tags = tags.filter((t) => t != tag)
        }}
      >
        <Close width={12} height={12} />{tag}
      </button>
    {/each}
    <input
      class="bg-transparent text-lg outline-none"
      {id}
      {name}
      {tabindex}
      {placeholder}
      bind:value={input}
      on:focus={() => (hasFocus = true)}
      on:blur={() => (hasFocus = false)}
      on:change={() => {
        tags = distict([...tags, input]).filter((t) => t.trim() !== '')
        input = ''
        onChange && onChange(tags)
      }}
    />
  </div>
</div>

<style lang="postcss">
  .focus {
    @apply border-secondary;
  }
</style>
