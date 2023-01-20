<script>
  import Overlay from './Overlay.svelte'
  import Portal from './Portal.svelte'

  export let isVisible = false
</script>

{#if isVisible}
  <Portal>
    <Overlay />
    <div class="center fixed inset-0 z-modal">
      <div class="relative max-h-[250px] max-w-[550px] rounded-lg bg-background p-10 shadow-xl">
        <slot />
      </div>
    </div>
  </Portal>
{/if}
