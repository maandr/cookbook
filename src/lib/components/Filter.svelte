<script lang="ts">
  import Cheese from '$components/Icons/Cheese.svelte'
  import Close from '$components/Icons/Close.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import ToggleButton from '$components/ToggleButton.svelte'
  import { ingrediences } from '$lib/constants'
  import { filter } from '$lib/stores'
  import Alcohol from './Icons/Alcohol.svelte'

  let ingredience: string

  function addIngredienceFilter(ingredience: string) {
    filter.set({
      ...$filter,
      mustContainIngrediences: [...$filter.mustContainIngrediences, ingredience]
    })
  }
</script>

<div class="mb-4 flex flex-wrap gap-2 border-b-2 border-primary pb-4">
  {#each ingrediences as prefab}
    <button
      on:click={() => addIngredienceFilter(prefab.value)}
      title={prefab.value}
      class="rounded bg-secondary p-2 px-3 hover:scale-125">{prefab.key}</button
    >
  {/each}
  <input
    class="w-20 rounded bg-secondary p-2 px-3 text-secondaryAccent outline-none hover:scale-125 focus:w-40 focus:scale-100"
    type="text"
    placeholder="+ Zutat"
    bind:value={ingredience}
    on:change={() => {
      addIngredienceFilter(ingredience)
      ingredience = ''
    }}
  />
</div>
<div class="my-4 flex flex-wrap gap-2">
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
  <div class="flex flex-wrap gap-2">
    {#each $filter.mustContainIngrediences as ingredience}
      <button
        class="flex items-center gap-1 rounded bg-primary px-2 text-background"
        on:click={() => {
          filter.set({
            ...$filter,
            mustContainIngrediences: $filter.mustContainIngrediences.filter((i) => i != ingredience)
          })
        }}
      >
        <Close width={14} height={14} />
        {ingredience}
      </button>
    {/each}
  </div>
</div>
