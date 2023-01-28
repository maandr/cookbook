<script lang="ts">
  export let isEnabled = true
</script>

<button
  on:click={() => (isEnabled = !isEnabled)}
  class="center flex-col gap-2 p-2 text-xs font-semibold md:p-3"
  class:disabled={!isEnabled}
>
  <slot />
</button>

<style lang="postcss">
  .disabled {
    @apply text-secondary;
  }
</style>
