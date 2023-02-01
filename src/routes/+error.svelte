<script lang="ts">
  import { Action } from '$lib/errors'
  import { goto } from '$app/navigation'
  import { isLoading } from '$lib/stores'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import ChevronLeft from '$components/Icons/ChevronLeft.svelte'
  import Refresh from '$components/Icons/Refresh.svelte'
  import TriangleExclamation from '$components/Icons/TriangleExclamation.svelte'

  onMount(() => {
    isLoading.set(false)
  })
</script>

<div class="m-auto flex max-w-[550px] flex-col gap-4 p-4">
  <h2 class="text-l flex flex-row items-center gap-2 font-semibold text-attention">
    <TriangleExclamation width={18} height={18} />
    Fehler
  </h2>
  {#if $page.error}
    <p class="text-sm">
      {$page.error.message}
    </p>
    <div class="mt-4 flex flex-row justify-end gap-2">
      {#if $page.error.availableActions}
        {#each $page.error.availableActions as action}
          {#if action === Action.Back}
            <button on:click={() => goto('/')}>
              <ChevronLeft width={18} height={18} />
              Zurück
            </button>
          {/if}
          {#if action === Action.Refresh}
            <button on:click={() => location.reload()}>
              <Refresh width={18} height={18} />
              Nochmal versuchen
            </button>
          {/if}
        {/each}
      {/if}
    </div>
  {:else}
    <p class="text-sm">Unbekannter Fehler</p>
  {/if}
</div>

<style lang="postcss">
  button {
    @apply flex flex-row items-center justify-center gap-2 bg-primary px-3 py-2 text-sm font-semibold text-primaryContrast;
  }
</style>
