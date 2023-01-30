<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import ThumbsDown from '$components/Icons/ThumbsDown.svelte'
  import ThumbsUp from '$components/Icons/ThumbsUp.svelte'

  export let value: boolean
  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let tabindex: number | undefined = undefined

  const dispatch = createEventDispatcher()
</script>

<button
  class="center h-full w-full cursor-pointer border-2 border-surface px-2 text-xs outline-none focus:border-primary"
  class:off={!value}
  class:on={value}
  {id}
  {name}
  {tabindex}
  on:click={() => {
    value = !value
    dispatch('click')
  }}
  on:change={() => {
    dispatch('change', { value })
  }}
>
  <div class="flex flex-col items-center gap-2">
    <slot />
    {#if value}
      <ThumbsUp width={18} height={18} />
    {:else}
      <ThumbsDown width={18} height={18} />
    {/if}
  </div>
</button>
