<script lang="ts">
  import '../app.css'
  import { recipes } from '$lib/stores'
  import { onMount } from 'svelte'
  import LoadingSpinner from '$components/LoadingSpinner.svelte'
  import Filter from '$components/Filter/Filter.svelte'

  export let data: { recipes: Recipe[] }

  onMount(() => {
    recipes.set(data.recipes) // populate recipies store with recipes received from the server-side
  })
</script>

<header>
  <Filter />
</header>

{#if $recipes.length === 0}
  <div
    class="center absolute top-0 left-0 bottom-0 right-0 z-loadingSpinner gap-6 bg-background text-primary"
  >
    <LoadingSpinner />
  </div>
{:else}
  <div class="relative min-h-screen bg-background pt-[52px] lg:m-auto lg:max-w-[1024px]">
    <main class="px-6 md:px-0"><slot /></main>
  </div>
{/if}
