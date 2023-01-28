<script lang="ts">
  import { filter } from '$lib/stores'
  import ActiveTags from './ActiveTags.svelte'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Bowl from '$components/Icons/Bowl.svelte'
  import Cake from '$components/Icons/Cake.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import ChevronUp from '$components/Icons/ChevronUp.svelte'
  import Drink from '$components/Icons/Drink.svelte'
  import ExcludedNutritions from './ExcludedNutritions.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import HideOnMobile from '$components/HideOnMobile.svelte'
  import IceCream from '$components/Icons/IceCream.svelte'
  import Ingrediences from './Ingrediences.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import NutritionToggle from './NutritionToggle.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import TagToggle from '$components/Filter/TagToggle.svelte'

  let isExpanded = false
</script>

{#if !isExpanded}
  <div
    class="fixed top-0 left-0 right-0 z-filterToggle h-[52px] bg-primary px-4 text-xs text-primaryContrast"
  >
    <div
      class="relative m-auto flex h-full w-full flex-row flex-wrap items-center gap-4 md:w-[1024px]"
    >
      <button on:click={() => (isExpanded = true)}><ActiveTags /></button>
      <div class="flex flex-row gap-1">
        {#each $filter.mustContainIngrediences as ingredience}
          <div>{ingredience}</div>
        {/each}
      </div>
      <div class="center absolute top-0 right-0 bottom-0">
        <ExcludedNutritions />
      </div>
    </div>
  </div>
{/if}

<div
  class="absolute left-0 right-0 z-filterBar max-h-[0px] overflow-hidden bg-background opacity-75 shadow-xl transition-all"
  class:expanded={isExpanded}
>
  <div class="m-auto flex w-full flex-col items-center justify-center px-4 md:w-[1024px] md:px-0">
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
        <HideOnMobile>Fleisch</HideOnMobile>
      </NutritionToggle>
      <NutritionToggle bind:isEnabled={$filter.fishAllowed}>
        <Fish />
        <HideOnMobile>Fisch</HideOnMobile>
      </NutritionToggle>
      <NutritionToggle bind:isEnabled={$filter.glutenAllowed}>
        <Gluten />
        <HideOnMobile>Gluten</HideOnMobile>
      </NutritionToggle>
      <NutritionToggle bind:isEnabled={$filter.lactoseAllowed}>
        <Cheese />
        <HideOnMobile>Laktose</HideOnMobile>
      </NutritionToggle>
      <NutritionToggle bind:isEnabled={$filter.alcoholAllowed}>
        <Alcohol />
        <HideOnMobile>Alkohol</HideOnMobile>
      </NutritionToggle>
    </div>

    <h3>Zutaten</h3>
    <Ingrediences />

    <button class="mb-2 mt-3 p-2 text-secondary" on:click={() => (isExpanded = false)}>
      <ChevronUp />
    </button>
  </div>
</div>

<style lang="postcss">
  h3 {
    @apply my-2 w-full py-1 pb-0 text-left text-xs font-semibold text-secondaryAccent underline md:text-center;
  }

  .expanded {
    @apply max-h-[600px] opacity-100;
  }
</style>
