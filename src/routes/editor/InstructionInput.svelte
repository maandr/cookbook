<script lang="ts">
  import { isNotBlank } from '$lib/utils/validationHelpers'
  import CirclePlus from '$components/Icons/CirclePlus.svelte'
  import Delete from '$components/Icons/Delete.svelte'
  import TextAreaAutosize from '$components/Forms/TextAreaAutosize.svelte'
  import UpDown from '$components/Icons/UpDown.svelte'
  import SortableList from '$components/SortableList/SortableList.svelte'
  import SortableListItem from '$components/SortableList/SortableListItem.svelte'

  export let entries: string[]
  export let tabindex: number | undefined = undefined

  function add() {
    entries = [...entries, '']
  }

  function remove(atIndex: number) {
    entries = entries.filter((e, i) => i !== atIndex)
  }
</script>

<div class="my-4">
  <SortableList bind:items={entries}>
    {#each entries as step, i (i + step)}
      <SortableListItem index={i}>
        <div class="instruction-line">
          <button
            class="delete center text-secondary hover:text-primary"
            on:click={() => remove(i)}
          >
            <Delete width={18} height={18} />
          </button>
          <div class="move center cursor-pointer text-secondary hover:text-primary">
            <UpDown width={18} height={18} />
          </div>
          <div class="text">
            <TextAreaAutosize
              name="step"
              tabindex={tabindex ? tabindex + i + 1 : undefined}
              maxRows={4}
              isValid={isNotBlank}
              value={step}
              on:change={(event) => (entries[i] = event.detail.value)}
            />
          </div>
        </div>
      </SortableListItem>
    {/each}
  </SortableList>
  <button
    on:click={add}
    tabindex={tabindex ? tabindex + entries.length * 4 + 1 : undefined}
    class="my-2 flex w-full items-center gap-4 border-2 border-transparent p-3 text-sm text-secondary outline-none focus:border-primary"
  >
    <CirclePlus width={18} height={18} /> Schritt hinzufügen
  </button>
</div>

<style lang="postcss">
  .instruction-line {
    padding: 4px;
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'move text'
      'delete text';
    gap: 8px;
  }

  @media (min-width: 1024px) {
    .instruction-line {
      padding: 4px;
      display: grid;
      grid-template-columns: 24px 24px 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'delete move text';
      gap: 8px;
    }
  }

  .move {
    grid-area: move;
  }

  .text {
    grid-area: text;
  }

  .delete {
    grid-area: delete;
  }
</style>
