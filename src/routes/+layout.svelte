<script lang="ts">
  import '../app.css'
  import { containsAll } from '$lib/utils/arrayHelpers'
  import { filter, recipes } from '$lib/stores'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import LoadingSpinner from '$components/LoadingSpinner.svelte'
  import Navigation from '$components/Navigation.svelte'

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
        isActive: $page.url.pathname === '/recipes' && $filter.mustHaveTags.length === 0,
        title: 'Alle',
        href: '/recipes',
        onClick: () => {
          filterForTags([])
        }
      },
      {
        isActive:
          $page.url.pathname === '/recipes' && containsAll($filter.mustHaveTags, ['appetizer']),
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
        isActive:
          $page.url.pathname === '/recipes' && containsAll($filter.mustHaveTags, ['dessert']),
        title: 'Desserts',
        href: '/recipes',
        onClick: () => {
          filterForTags(['dessert'])
        }
      },
      {
        isActive:
          $page.url.pathname === '/recipes' && containsAll($filter.mustHaveTags, ['baking']),
        title: 'Kuchen',
        href: '/recipes',
        onClick: () => {
          filterForTags(['baking'])
        }
      },
      {
        isActive: $page.url.pathname === '/recipes' && containsAll($filter.mustHaveTags, ['drink']),
        title: 'Drinks',
        href: '/recipes',
        onClick: () => {
          filterForTags(['drink'])
        }
      },
      {
        isActive: $page.url.pathname === '/editor',
        title: 'Editor',
        href: '/editor',
        onClick: () => {
          filterForTags([])
        }
      }
    ]}
  />
  {#if $recipes.length === 0}
    <div
      class="center absolute top-0 left-0 bottom-0 right-0 z-loadingSpinner gap-6 bg-primary text-secondary"
    >
      <LoadingSpinner />
    </div>
  {:else}
    <main class="col-span-12 p-8 md:col-span-9"><slot /></main>
  {/if}
</div>
