<script lang="ts">
  import '../app.css'
  import { filter, isLoading } from '$lib/stores'
  import LoadingSpinner from '$components/LoadingSpinner.svelte'

  $: paddingTop = $filter.mustContainIngrediences.length > 0 ? '84px' : '60px'
</script>

<header
  id="context-bar"
  class="fixed top-0 left-0 right-0 z-menuBar bg-primary text-xs text-primaryContrast"
/>

{#if $isLoading}
  <div
    class="center absolute top-0 left-0 bottom-0 right-0 z-loadingSpinner gap-6 bg-background text-primary"
  >
    <LoadingSpinner />
  </div>
{/if}

<div
  class="relative min-h-screen bg-background lg:m-auto lg:max-w-[1024px]"
  style={`padding-top: ${paddingTop}`}
>
  <main class="mt-8 px-6 md:px-0">
    <slot />
  </main>
</div>
