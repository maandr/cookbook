<script lang="ts">
  import LoadingSpinner from '$components/LoadingSpinner.svelte'
  import Navigation from '$components/Navigation.svelte'
  import { recipes } from '$lib/stores'
  import { onMount } from 'svelte'
  import '../app.css'

  export let data: { recipes: Recipe[] }

  onMount(() => {
    recipes.set(data.recipes)
  })
</script>

<div class="relative grid min-h-screen grid-cols-12 gap-4 bg-background">
  <Navigation
    entries={[
      { title: 'Rezepte', href: '/recipes' },
      { title: 'Zurück', href: '/recipes' }
    ]}
  />
  {#if $recipes.length === 0}
    <div
      class="absolute top-0 left-0 bottom-0 right-0 z-loadingSpinner flex items-center justify-center gap-6 bg-primary text-secondary"
    >
      <LoadingSpinner />
    </div>
  {:else}
    <main class="col-span-12 p-8 md:col-span-9"><slot /></main>
  {/if}
</div>
