<script lang="ts">
  import { isNotBlank } from '$lib/utils/validationHelpers'
  import CirclePlus from '$components/Icons/CirclePlus.svelte'
  import Delete from '$components/Icons/Delete.svelte'
  import TextAreaAutosize from '$components/Forms/TextAreaAutosize.svelte'
  import UpDown from '$components/Icons/UpDown.svelte'
  import { flip } from 'svelte/animate'

  export let entries: string[]
  export let tabindex: number | undefined = undefined

  let hovering = -1

  function add() {
    entries = [...entries, '']
  }

  function remove(atIndex: number) {
    entries = entries.filter((e, i) => i !== atIndex)
  }

  function drop(event: DragEvent, toPosition: number) {
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move'
      const fromPosition = parseInt(event.dataTransfer.getData('text/plain'))
      const sorted = entries

      if (fromPosition < toPosition) {
        sorted.splice(toPosition + 1, 0, sorted[fromPosition])
        sorted.splice(fromPosition, 1)
      } else {
        sorted.splice(toPosition, 0, sorted[fromPosition])
        sorted.splice(fromPosition + 1, 1)
      }
      entries = sorted
      hovering = -1
    }
  }

  function drag(event: DragEvent, index: number) {
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.setData('text/plain', index.toString())
    }
  }
</script>

<div class="my-4">
  {#each entries as step, i (i + step)}
    <div
      draggable={true}
      animate:flip
      on:dragstart={(event) => drag(event, i)}
      on:drop|preventDefault={(event) => drop(event, i)}
      on:dragenter={() => (hovering = i)}
      on:dragover|preventDefault={() => false}
      class="instruction-line"
      class:is-hovered={hovering === i}
    >
      <div class="move center cursor-pointer text-secondary hover:text-primary">
        <UpDown width={18} height={18} />
      </div>
      <div class="text">
        <TextAreaAutosize
          name="step"
          tabindex={tabindex ? tabindex + i + 1 : undefined}
          maxRows={4}
          isValid={isNotBlank}
          bind:value={step}
        />
      </div>
      <button class="delete center text-secondary hover:text-primary" on:click={() => remove(i)}>
        <Delete width={18} height={18} />
      </button>
    </div>
  {/each}
  <button
    on:click={add}
    tabindex={tabindex ? tabindex + entries.length * 4 + 1 : undefined}
    class="my-2 flex w-full items-center gap-4 p-3 text-sm text-secondary"
  >
    <CirclePlus width={18} height={18} /> Schritt hinzufügen
  </button>
</div>

<style lang="postcss">
  .is-hovered {
    @apply bg-secondary opacity-50;
  }

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
      grid-template-columns: 24px 1fr 24px;
      grid-template-rows: 1fr;
      grid-template-areas: 'move text delete';
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
