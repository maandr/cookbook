<script lang="ts">
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import ToggleButton from '$components/ToggleButton.svelte'
  import { filter } from '$lib/stores'
  import Alcohol from '$components/Icons/Alcohol.svelte'
</script>

<ToggleButton bind:value={$filter.meatAllowed}>
  <Meat width={16} height={16} />
</ToggleButton>
<ToggleButton bind:value={$filter.fishAllowed}>
  <Fish width={16} height={16} />
</ToggleButton>
<ToggleButton bind:value={$filter.glutenAllowed}>
  <Gluten width={16} height={16} />
</ToggleButton>
<ToggleButton bind:value={$filter.lactoseAllowed}>
  <Cheese width={16} height={16} />
</ToggleButton>
<ToggleButton bind:value={$filter.alcoholAllowed}>
  <Alcohol width={16} height={16} />
</ToggleButton>
