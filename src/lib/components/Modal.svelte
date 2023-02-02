<script>
  import Close from './Icons/Close.svelte'
  import Overlay from './Overlay.svelte'
  import Portal from './Portal.svelte'

  export let isVisible = false
</script>

{#if isVisible}
  <Portal>
    <Overlay />
    <div class="center fixed inset-0 z-modal">
      <div
        class="relative max-h-[250px] max-w-[350px] rounded-lg bg-background px-6 pt-8 pb-4 shadow-xl md:max-w-[550px]"
      >
        <button
          class="absolute top-0 right-0 p-4 text-secondary"
          on:click={() => (isVisible = false)}
        >
          <Close />
        </button>
        <slot />
      </div>
    </div>
  </Portal>
{/if}
