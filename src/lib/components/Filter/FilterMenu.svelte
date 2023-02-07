<script lang="ts">
  import { filter } from '$lib/stores'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Bowl from '$components/Icons/Bowl.svelte'
  import Cake from '$components/Icons/Cake.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Drink from '$components/Icons/Drink.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import IceCream from '$components/Icons/IceCream.svelte'
  import Ingrediences from './Ingrediences.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import NutritionToggle from './NutritionToggle.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import TagToggle from '$components/Filter/TagToggle.svelte'
</script>

<div class="m-auto flex w-full flex-col items-center justify-center px-4 lg:items-start lg:px-0">
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
</div>

<style lang="postcss">
  h3 {
    @apply my-2 w-full py-1 pb-0 text-left text-xs font-semibold text-secondaryAccent underline;
  }
</style>
