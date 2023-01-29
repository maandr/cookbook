<script lang="ts">
  import '../app.css'
  import { filter, recipes } from '$lib/stores'
  import { onMount } from 'svelte'
  import LoadingSpinner from '$components/LoadingSpinner.svelte'

  export let data: { recipes: Recipe[] }

  $: paddingTop = $filter.mustContainIngrediences.length > 0 ? '84px' : '60px'

  onMount(() => {
    recipes.set(data.recipes) // populate recipies store with recipes received from the server-side
  })
</script>

<header
  id="context-bar"
  class="fixed top-0 left-0 right-0 z-menuBar bg-primary text-xs text-primaryContrast"
/>

{#if $recipes.length === 0}
  <div
    class="center absolute top-0 left-0 bottom-0 right-0 z-loadingSpinner gap-6 bg-background text-primary"
  >
    <LoadingSpinner />
  </div>
{:else}
  <div
    class="relative min-h-screen bg-background lg:m-auto lg:max-w-[1024px]"
    style={`padding-top: ${paddingTop}`}
  >
    <main class="mt-8 px-6 md:px-0"><slot /></main>
  </div>
{/if}
