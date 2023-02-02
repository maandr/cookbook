<script lang="ts">
  import { clickOutside } from '$lib/actions/clickOutside'
  import { DEFAULT_FILTER } from '$lib/constants'
  import { filter } from '$lib/stores'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Ban from '$components/Filter/Ban.svelte'
  import Bowl from '$components/Icons/Bowl.svelte'
  import Cake from '$components/Icons/Cake.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import ChevronUp from '$components/Icons/ChevronUp.svelte'
  import Drink from '$components/Icons/Drink.svelte'
  import Filter from '$components/Icons/Filter.svelte'
  import FilterClear from '$components/Icons/FilterClear.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import IceCream from '$components/Icons/IceCream.svelte'
  import Ingrediences from './Ingrediences.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import Mortar from '$components/Icons/Mortar.svelte'
  import NutritionToggle from './NutritionToggle.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import TagToggle from '$components/Filter/TagToggle.svelte'
  import WidthDelimiter from '$components/WidthDelimiter.svelte'
  import CirclePlus from '$components/Icons/CirclePlus.svelte'

  let isExpanded = false
</script>

<div use:clickOutside={() => (isExpanded = false)}>
  <WidthDelimiter>
    <button class="grid w-full grid-cols-12 gap-2 p-4" on:click={() => (isExpanded = !isExpanded)}>
      <div class="col-span-4 flex flex-row flex-wrap items-center gap-2">
        <a href="/editor" title="Rezept erstellen">
          <CirclePlus />
        </a>
        {#if isExpanded}
          <button
            on:click={() => {
              console.log('click')
              filter.set({ ...DEFAULT_FILTER })
            }}
          >
            <FilterClear />
          </button>
        {:else}
          <Filter />
        {/if}
        {#if $filter.mustHaveTags.includes('salad')}
          Salat
        {:else if $filter.mustHaveTags.includes('meal')}
          Kochen
        {:else if $filter.mustHaveTags.includes('dessert')}
          Dessert
        {:else if $filter.mustHaveTags.includes('baking')}
          Backen
        {:else if $filter.mustHaveTags.includes('drink')}
          Drinks
        {/if}
      </div>

      <div class="col-span-8 flex flex-row items-center justify-end gap-2">
        {#if !$filter.meatAllowed}
          <Ban>
            <Meat width={16} height={16} />
          </Ban>
        {/if}
        {#if !$filter.fishAllowed}
          <Ban>
            <Fish width={16} height={16} />
          </Ban>
        {/if}
        {#if !$filter.glutenAllowed}
          <Ban>
            <Gluten width={16} height={16} />
          </Ban>
        {/if}
        {#if !$filter.lactoseAllowed}
          <Ban>
            <Cheese width={16} height={16} />
          </Ban>
        {/if}
        {#if !$filter.alcoholAllowed}
          <Ban>
            <Alcohol width={16} height={16} />
          </Ban>
        {/if}
      </div>

      {#if $filter.mustContainIngrediences.length > 0}
        <div class="col-span-12 flex w-full flex-row flex-wrap gap-2 pt-2">
          <Mortar width={12} height={12} />
          {$filter.mustContainIngrediences.join(', ')}
        </div>
      {/if}
    </button>
  </WidthDelimiter>

  <div
    class="max-h-[0px] overflow-hidden bg-background text-primary opacity-75 shadow-xl transition-all"
    class:expanded={isExpanded}
  >
    <WidthDelimiter>
      <div
        class="m-auto flex w-full flex-col items-center justify-center px-4 md:w-[1024px] md:items-start md:px-0"
      >
        <h3>Kategorie</h3>
        <div class="my-2 flex flex-row flex-wrap gap-1 md:my-4 md:gap-2">
          <TagToggle tags={['salad']}><Bowl /> Salat</TagToggle>
          <TagToggle tags={['meal']}><Portion /> Kochen</TagToggle>
          <TagToggle tags={['dessert']}><IceCream />Dessert</TagToggle>
          <TagToggle tags={['baking']}><Cake /> Backen</TagToggle>
          <TagToggle tags={['drink']}><Drink /> Drinks</TagToggle>
        </div>

        <h3>Ernährung</h3>
        <div class="my-2 flex flex-row flex-wrap gap-1 md:my-4 md:gap-2">
          <NutritionToggle bind:isEnabled={$filter.meatAllowed}>
            <Meat />
            Fleisch
          </NutritionToggle>
          <NutritionToggle bind:isEnabled={$filter.fishAllowed}>
            <Fish />
            Fisch
          </NutritionToggle>
          <NutritionToggle bind:isEnabled={$filter.glutenAllowed}>
            <Gluten />
            Gluten
          </NutritionToggle>
          <NutritionToggle bind:isEnabled={$filter.lactoseAllowed}>
            <Cheese />
            Laktose
          </NutritionToggle>
          <NutritionToggle bind:isEnabled={$filter.alcoholAllowed}>
            <Alcohol />
            Alkohol
          </NutritionToggle>
        </div>

        <h3>Zutaten</h3>
        <Ingrediences />

        <button
          class="center mb-2 mt-3 w-full p-2 text-secondary"
          on:click={() => (isExpanded = false)}
        >
          <ChevronUp />
        </button>
      </div>
    </WidthDelimiter>
  </div>
</div>

<style lang="postcss">
  h3 {
    @apply my-2 w-full py-1 pb-0 text-left text-xs font-semibold text-secondaryAccent underline;
  }

  .expanded {
    @apply max-h-[600px] opacity-100;
  }
</style>
