<script lang="ts">
  import { flip } from 'svelte/animate'
  import { isAPositiveNumber, isBlank, isNotBlank, isNumber } from '$lib/utils/validationHelpers'
  import { UNITS } from '$lib/constants'
  import AmountWithUnitInput from '$components/Forms/AmountWithUnitInput.svelte'
  import Button from '$components/Forms/Button.svelte'
  import CirclePlus from '$components/Icons/CirclePlus.svelte'
  import Delete from '$components/Icons/Delete.svelte'
  import Input from '$components/Forms/Input.svelte'
  import Mortar from '$components/Icons/Mortar.svelte'
  import Scale from '$components/Icons/Scale.svelte'
  import ToggleButton from '$components/Forms/ToggleButton.svelte'
  import UpDown from '$components/Icons/UpDown.svelte'

  export let entries: Ingredience[]
  export let tabindex: number | undefined = undefined

  let hovering = -1

  function add() {
    entries = [
      ...entries,
      {
        name: '',
        required: true,
        quantity: { amount: 0, unit: '' }
      }
    ]
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
  <div class="grid grid-cols-crafterIngredienceMobile gap-2 md:grid-cols-crafterIngredience">
    <h3>Zutat</h3>
    <h3>Menge</h3>
    <h3>Muss?</h3>
    <div />
  </div>
  {#each entries as entry, i (entry.name + i)}
    <div
      draggable={true}
      animate:flip
      on:dragstart={(event) => drag(event, i)}
      on:drop|preventDefault={(event) => drop(event, i)}
      on:dragenter={() => (hovering = i)}
      on:dragover|preventDefault={() => false}
      class="my-2 grid grid-cols-crafterIngredienceMobile gap-2 md:grid-cols-crafterIngredience"
      class:is-hovered={hovering === i}
    >
      <div class="center cursor-pointer pl-[10px] text-gray-600">
        <UpDown />
      </div>
      <Input
        name="ingredience"
        tabindex={tabindex ? tabindex + i * 4 + 1 : undefined}
        bind:value={entry.name}
        isValid={isNotBlank}
      >
        <Mortar width={22} height={22} />
      </Input>
      <AmountWithUnitInput
        tabindex={tabindex ? tabindex + i * 4 + 2 : undefined}
        bind:value={entry.quantity}
        allowedUnits={UNITS}
        isValid={(value) =>
          isNumber(value.amount)
            ? value.amount == 0
              ? isBlank(value.unit)
              : isAPositiveNumber(value.amount) && isNotBlank(value.unit)
            : false}
      >
        <Scale width={22} height={22} />
      </AmountWithUnitInput>
      <ToggleButton
        tabindex={tabindex ? tabindex + i * 4 + 4 : undefined}
        bind:value={entry.required}
      />
      <Button on:click={() => remove(i)}>
        <Delete width={22} height={22} />
      </Button>
    </div>
  {/each}
  <button
    on:click={add}
    tabindex={tabindex ? tabindex + entries.length * 4 + 1 : undefined}
    class="my-2 flex w-full items-center gap-4 p-3 text-lg text-gray-600"
  >
    <CirclePlus /> Zutat hinzufügen
  </button>
</div>

<style lang="postcss">
  h3 {
    @apply font-bold;
  }

  .is-hovered {
    @apply bg-slate-400 opacity-50;
  }
</style>
