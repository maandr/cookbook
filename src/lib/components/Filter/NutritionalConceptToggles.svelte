<script lang="ts">
  import Cheese from '$components/Icons/Cheese.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import ToggleButton from '$components/Forms/ToggleButton.svelte'
  import { filter } from '$lib/stores'
  import Alcohol from '$components/Icons/Alcohol.svelte'
</script>

<ToggleButton bind:value={$filter.meatAllowed}>
  <Meat width={16} height={16} />
  <p class="hidden xl:block">Fleisch</p>
</ToggleButton>
<ToggleButton bind:value={$filter.fishAllowed}>
  <Fish width={16} height={16} />
  <p class="hidden xl:block">Fisch</p>
</ToggleButton>
<ToggleButton bind:value={$filter.glutenAllowed}>
  <Gluten width={16} height={16} />
  <p class="hidden xl:block">Gluten</p>
</ToggleButton>
<ToggleButton bind:value={$filter.lactoseAllowed}>
  <Cheese width={16} height={16} />
  <p class="hidden xl:block">Laktose</p>
</ToggleButton>
<ToggleButton bind:value={$filter.alcoholAllowed}>
  <Alcohol width={16} height={16} />
  <p class="hidden xl:block">Alkohol</p>
</ToggleButton>
