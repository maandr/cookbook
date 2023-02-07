<script lang="ts">
  import { filter } from '$lib/stores'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Ban from './Ban.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Meat from '$components/Icons/Meat.svelte'
</script>

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
