<script lang="ts">
  import Meat from '$components/Icons/Meat.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from './Icons/Fish.svelte'
  import Plant from './Icons/Plant.svelte'
  import type { Recipe } from '$types/Recipe'

  export let recipe: Recipe
  export let size = 16
</script>

<ul class="flex flex-row gap-2 md:float-right">
  {#if recipe.containsMeat}
    <li>
      <Meat width={size} height={size} />
    </li>
  {/if}
  {#if recipe.containsFish}
    <li>
      <Fish width={size} height={size} />
    </li>
  {/if}
  {#if recipe.containsGluten}
    <li><Gluten width={size} height={size} /></li>
  {/if}
  {#if recipe.containsLactose}
    <li><Cheese width={size} height={size} /></li>
  {/if}
  {#if recipe.containsOnlyPlants}
    <li>
      <Plant width={size} height={size} />
    </li>
  {/if}
</ul>

<style lang="postcss">
  ul li {
    @apply bg-colorPrimaryAccent;
    @apply text-colorBackground;
    @apply rounded-xl;
    @apply p-3;
  }
</style>
