<script lang="ts">
  import { DEFAULT_FILTER } from '$lib/constants'
  import { filter, filtered, isLoading, recipes } from '$lib/stores'
  import { onMount } from 'svelte'
  import ActiveCategory from '$components/Filter/ActiveCategory.svelte'
  import CirclePlus from '$components/Icons/CirclePlus.svelte'
  import DisallowedNutritions from '$components/Filter/DisallowedNutritions.svelte'
  import Filter from '$components/Icons/Filter.svelte'
  import FilterClear from '$components/Icons/FilterClear.svelte'
  import FilterMenu from '$components/Filter/FilterMenu.svelte'
  import Menu from '$components/Menu/Menu.svelte'
  import MenuBar from '$components/Menu/MenuBar.svelte'
  import MenuIcon from '$components/Icons/Menu.svelte'
  import Mortar from '$components/Icons/Mortar.svelte'
  import RecipeCard from '../lib/components/Recipe/RecipeCard.svelte'
  import MenuOptions from '$components/Menu/MenuOptions.svelte'
  import { goto } from '$app/navigation'

  export let data: Result<Recipe[]>

  let isExpanded = false
  let menuKind = 'menu'

  function resetFilter() {
    filter.set({ ...DEFAULT_FILTER })
  }

  function showFilter() {
    isExpanded = true
    menuKind = 'filter'
  }

  function showMenu() {
    isExpanded = true
    menuKind = 'menu'
  }

  onMount(() => {
    recipes.set(data.payload)
    isLoading.set(false)
  })
</script>

<svelte:head>
  <title>Cookbook</title>
</svelte:head>

<Menu bind:isExpanded>
  <div slot="bar">
    <MenuBar>
      <div slot="left" class="flex flex-row items-end gap-2">
        {#if isExpanded && menuKind == 'filter'}
          <button title="Filter zurücksetzen" on:click={resetFilter}>
            <FilterClear width={18} height={18} />
          </button>
        {:else}
          <button title="Filter setzen" on:click={showFilter}>
            <Filter width={18} height={18} />
          </button>
        {/if}
        <button on:click={showFilter}>
          <ActiveCategory />
        </button>
      </div>
      <div slot="center">
        <button
          class="flex w-full flex-row items-center justify-center gap-2"
          on:click={showFilter}
        >
          <DisallowedNutritions />
        </button>
      </div>
      <div slot="right" class="flex justify-end">
        <button on:click={showMenu}>
          <MenuIcon width={18} height={18} />
        </button>
      </div>
    </MenuBar>
    {#if $filter.mustContainIngrediences.length > 0}
      <button class="flex w-full flex-row flex-wrap gap-2 pb-2" on:click={showFilter}>
        <Mortar width={12} height={12} />
        {$filter.mustContainIngrediences.join(', ')}
      </button>
    {/if}
  </div>
  <div slot="menu" class="w-full">
    {#if menuKind === 'filter'}
      <FilterMenu />
    {:else if menuKind == 'menu'}
      <MenuOptions
        options={[
          {
            icon: CirclePlus,
            title: 'Rezept erstellen',
            onClick: () => {
              goto('/editor')
            }
          }
        ]}
      />
    {/if}
  </div>
</Menu>

<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
  {#if $filtered.length === 0}
    <p class="col-span-1 w-full text-center text-secondary md:col-span-2 xl:grid-cols-3">
      Es gab leider keine Treffer für die aktuelle Suche.
    </p>
  {:else}
    {#each $filtered as recipe}
      <RecipeCard {recipe} />
    {/each}
  {/if}
</div>
