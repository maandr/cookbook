<script lang="ts">
  import { filter } from '$lib/stores'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import Ban from './Ban.svelte'
</script>

<div class="flex flex-row flex-wrap gap-2">
  {#if !$filter.meatAllowed}
    <Ban>
      <Meat width={18} height={18} />
    </Ban>
  {/if}
  {#if !$filter.fishAllowed}
    <Ban>
      <Fish width={18} height={18} />
    </Ban>
  {/if}
  {#if !$filter.glutenAllowed}
    <Ban>
      <Gluten width={18} height={18} />
    </Ban>
  {/if}
  {#if !$filter.lactoseAllowed}
    <Ban>
      <Cheese width={18} height={18} />
    </Ban>
  {/if}
  {#if !$filter.alcoholAllowed}
    <Ban>
      <Alcohol width={18} height={18} />
    </Ban>
  {/if}
</div>
