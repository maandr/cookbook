<script lang="ts">
  import ThumbsDown from '$components/Icons/ThumbsDown.svelte'
  import ThumbsUp from '$components/Icons/ThumbsUp.svelte'

  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let tabindex: number | undefined = undefined
  export let value: boolean
</script>

<button
  class="flex cursor-pointer items-center justify-center gap-2 rounded border-2 border-transparent bg-primary py-2 px-3 text-background outline-none focus:border-secondary"
  class:off={!value}
  class:on={value}
  {id}
  {name}
  {tabindex}
  on:click={() => (value = !value)}
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
