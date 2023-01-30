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
  class="center border-secondaty cursor-pointer gap-2 border-2 border-surface outline-none focus:border-primary"
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
  <div class="flex w-full flex-row items-center justify-between gap-0">
    <div class="flex flex-row items-center gap-2 p-3 text-sm md:px-5">
      <slot />
    </div>
    <div class="p-[14px]" class:on={value} class:off={!value}>
      {#if value}
        <ThumbsUp width={18} height={18} />
      {:else}
        <ThumbsDown width={18} height={18} />
      {/if}
    </div>
  </div>
</button>

<style lang="postcss">
  .on {
    @apply bg-primary text-primaryContrast;
  }

  .off {
    @apply bg-surface text-secondary;
  }
</style>
