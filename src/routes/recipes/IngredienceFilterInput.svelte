<script lang="ts">
  import { distict } from '$lib/utils/arrayHelpers'
  import { filter } from '$lib/stores'
  import { INGREDIENCE_PREFABS } from '$lib/constants'

  let input: string

  function add(ingredience: string) {
    filter.set({
      ...$filter,
      mustContainIngrediences: distict([...$filter.mustContainIngrediences, ingredience])
    })
  }
</script>

<div class="mb-4 flex flex-wrap gap-2 border-b-2 border-primary pb-4">
  {#each INGREDIENCE_PREFABS as prefab}
    <button
      on:click={() => add(prefab.value)}
      title={prefab.value}
      class="rounded bg-secondary p-2 px-3 hover:scale-125">{prefab.key}</button
    >
  {/each}
  <input
    class="w-20 rounded bg-secondary p-2 px-3 text-primaryAccent outline-none placeholder:text-primary hover:scale-125 focus:w-40 focus:scale-100"
    type="text"
    placeholder="+ Zutat"
    bind:value={input}
    on:change={() => {
      add(input)
      input = ''
    }}
  />
</div>
