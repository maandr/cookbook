<script lang="ts">
  import Meat from '$components/Icons/Meat.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from '../Icons/Fish.svelte'
  import Alcohol from '$components/Icons/Alcohol.svelte'

  export let recipe: Recipe
  export let size = 18
</script>

<ul class="flex flex-row gap-2">
  {#if recipe.containsMeat}
    <li title="Fleisch"><Meat width={size} height={size} /></li>
  {/if}
  {#if recipe.containsFish}
    <li title="Fisch"><Fish width={size} height={size} /></li>
  {/if}
  {#if recipe.containsGluten}
    <li title="Gluten"><Gluten width={size} height={size} /></li>
  {/if}
  {#if recipe.containsLactose}
    <li title="Laktose"><Cheese width={size} height={size} /></li>
  {/if}
  {#if recipe.containsAlcohol}
    <li title="Alkohol"><Alcohol width={size} height={size} /></li>
  {/if}
</ul>

<style lang="postcss">
  ul li {
    @apply rounded bg-primaryAccent p-[6px] text-primaryContrast;
  }
</style>
