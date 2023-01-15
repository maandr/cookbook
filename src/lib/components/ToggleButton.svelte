<script lang="ts">
  export let value: boolean
</script>

<button
  class="cursor-pointer rounded bg-primary py-1 px-2 text-background"
  on:click={() => (value = !value)}
  class:off={!value}
  class:on={value}
>
  <slot />
</button>

<style lang="postcss">
  .on {
    @apply opacity-100;
  }

  .off {
    @apply opacity-20;
  }
</style>
