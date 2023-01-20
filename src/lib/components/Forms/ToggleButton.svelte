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
  class="center cursor-pointer gap-2 rounded border-2 border-transparent bg-primary py-2 px-3 text-background outline-none focus:border-secondary"
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
  <div class="flex gap-4">
    <slot />
    {#if value}
      <ThumbsUp />
    {:else}
      <ThumbsDown />
    {/if}
  </div>
</button>

<style lang="postcss">
  .on {
    @apply opacity-100;
  }

  .off {
    @apply opacity-80;
  }
</style>
