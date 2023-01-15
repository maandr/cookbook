<script lang="ts">
  import Meat from '$components/Icons/Meat.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from '../Icons/Fish.svelte'

  export let recipe: Recipe
  export let size = 16
</script>

<ul class="flex flex-row gap-2">
  {#if recipe.containsMeat}
    <li class="text-[#F4ACB7]">
      <Meat width={size} height={size} />
    </li>
  {/if}
  {#if recipe.containsFish}
    <li>
      <Fish width={size} height={size} />
    </li>
  {/if}
  {#if recipe.containsGluten}
    <li class="text-[#FFCD70]"><Gluten width={size} height={size} /></li>
  {/if}
  {#if recipe.containsLactose}
    <li class="text-[#F3B700]"><Cheese width={size} height={size} /></li>
  {/if}
</ul>

<style lang="postcss">
  ul li {
    @apply rounded bg-primaryAccent p-[6px];
  }
</style>
