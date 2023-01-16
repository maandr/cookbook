<script lang="ts">
  import LoadingSpinner from '$components/LoadingSpinner.svelte'
  import Navigation from '$components/Navigation.svelte'
  import { filter, recipes } from '$lib/stores'
  import { containsAll } from '$lib/utils/arrayHelpers'
  import { onMount } from 'svelte'
  import '../app.css'

  export let data: { recipes: Recipe[] }

  onMount(() => {
    recipes.set(data.recipes) // populate recipies store with recipes received from the server-side
  })

  function filterForTags(tags: string[]) {
    filter.set({ ...$filter, mustHaveTags: tags })
  }
</script>

<div class="relative grid min-h-screen grid-cols-12 gap-4 bg-background">
  <Navigation
    entries={[
      {
        isActive: $filter.mustHaveTags.length === 0,
        title: 'Alle',
        href: '/recipes',
        onClick: () => {
          filterForTags([])
        }
      },
      {
        isActive: containsAll($filter.mustHaveTags, ['appetizer']),
        title: 'Vorspeise',
        href: '/recipes',
        onClick: () => {
          filterForTags(['appetizer'])
        }
      },
      {
        isActive: containsAll($filter.mustHaveTags, ['meal']),
        title: 'Hauptgang',
        href: '/recipes',
        onClick: () => {
          filterForTags(['meal'])
        }
      },
      {
        isActive: containsAll($filter.mustHaveTags, ['dessert']),
        title: 'Desserts',
        href: '/recipes',
        onClick: () => {
          filterForTags(['dessert'])
        }
      },
      {
        isActive: containsAll($filter.mustHaveTags, ['baking']),
        title: 'Kuchen',
        href: '/recipes',
        onClick: () => {
          filterForTags(['baking'])
        }
      },
      {
        isActive: containsAll($filter.mustHaveTags, ['snack']),
        title: 'Snacks',
        href: '/recipes',
        onClick: () => {
          filterForTags(['snack'])
        }
      },
      {
        isActive: containsAll($filter.mustHaveTags, ['drink']),
        title: 'Drinks',
        href: '/recipes',
        onClick: () => {
          filterForTags(['drink'])
        }
      }
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
