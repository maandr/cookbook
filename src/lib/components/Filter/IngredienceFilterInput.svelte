<script lang="ts">
  import { ingrediencePrefabs } from '$lib/constants'
  import { filter } from '$lib/stores'
  import { isEqualTo } from '$lib/utils/stringHelpers'

  let ingredienceFieldInput: string

  function addIngredienceFilter(ingredience: string) {
    if (
      !$filter.mustContainIngrediences.some((i) => isEqualTo(i, ingredience, { ignoreCase: true }))
    ) {
      filter.set({
        ...$filter,
        mustContainIngrediences: [...$filter.mustContainIngrediences, ingredience]
      })
    }
  }
</script>

<div class="mb-4 flex flex-wrap gap-2 border-b-2 border-primary pb-4">
  {#each ingrediencePrefabs as prefab}
    <button
      on:click={() => addIngredienceFilter(prefab.value)}
      title={prefab.value}
      class="rounded bg-secondary p-2 px-3 hover:scale-125">{prefab.key}</button
    >
  {/each}
  <input
    class="w-20 rounded bg-secondary p-2 px-3 text-primaryAccent outline-none placeholder:text-primary hover:scale-125 focus:w-40 focus:scale-100"
    type="text"
    placeholder="+ Zutat"
    bind:value={ingredienceFieldInput}
    on:change={() => {
      addIngredienceFilter(ingredienceFieldInput)
      ingredienceFieldInput = ''
    }}
  />
</div>
