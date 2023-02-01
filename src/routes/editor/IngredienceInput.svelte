<script lang="ts">
  import { isAPositiveNumber, isBlank, isNotBlank, isNumber } from '$lib/utils/validationHelpers'
  import { UNITS } from '$lib/constants'
  import AmountWithUnitInput from '$components/Forms/AmountWithUnitInput.svelte'
  import CirclePlus from '$components/Icons/CirclePlus.svelte'
  import Delete from '$components/Icons/Delete.svelte'
  import SortableList from '$components/SortableList/SortableList.svelte'
  import SortableListItem from '$components/SortableList/SortableListItem.svelte'
  import Input from '$components/Forms/Input.svelte'
  import Mortar from '$components/Icons/Mortar.svelte'
  import Scale from '$components/Icons/Scale.svelte'
  import ToggleButton from '$components/Forms/ToggleButton.svelte'
  import UpDown from '$components/Icons/UpDown.svelte'

  export let entries: Ingredience[]
  export let tabindex: number | undefined = undefined

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
</script>

<div class="my-2">
  <SortableList bind:items={entries}>
    {#each entries as entry, i (entry.name + i)}
      <SortableListItem index={i}>
        <div class="ingredience-line">
          <div class="center move cursor-pointer text-secondary hover:text-primary">
            <UpDown width={18} height={18} />
          </div>
          <div class="delete center text-secondary hover:text-primary">
            <button on:click={() => remove(i)}>
              <Delete width={18} height={18} />
            </button>
          </div>
          <div class="ingredience">
            <Input
              name="ingredience"
              tabindex={tabindex ? tabindex + i * 4 + 1 : undefined}
              value={entry.name}
              isValid={isNotBlank}
              on:change={(event) => (entry.name = event.detail.value)}
            >
              <Mortar width={18} height={18} />
            </Input>
          </div>
          <div class="quantity">
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
              <Scale width={18} height={18} />
            </AmountWithUnitInput>
          </div>
          <div class="is-required">
            <ToggleButton
              tabindex={tabindex ? tabindex + i * 4 + 4 : undefined}
              bind:value={entry.required}>Nötig</ToggleButton
            >
          </div>
        </div>
      </SortableListItem>
    {/each}
  </SortableList>

  <button
    on:click={add}
    tabindex={tabindex ? tabindex + entries.length * 4 + 1 : undefined}
    class="my-2 flex w-full items-center gap-4 border-2 border-transparent p-3 text-sm text-secondary outline-none hover:text-primary focus:border-primary"
  >
    <CirclePlus width={18} height={18} /> Zutat hinzufügen
  </button>
</div>

<style lang="postcss">
  .ingredience-line {
    padding: 12px 0;
    display: grid;
    grid-template-columns: 24px 1fr 109px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'move ingredience ingredience'
      'delete quantity is-required';
    gap: 4px;
  }

  @media (min-width: 1024px) {
    .ingredience-line {
      padding: 4px 0;
      display: grid;
      grid-template-columns: 24px 24px 1fr 250px 120px;
      grid-template-rows: 1fr;
      grid-template-areas: 'delete move ingredience quantity is-required';
      gap: 8px;
    }
  }

  .move {
    grid-area: move;
  }

  .ingredience {
    grid-area: ingredience;
  }

  .quantity {
    grid-area: quantity;
  }

  .is-required {
    grid-area: is-required;
  }

  .delete {
    grid-area: delete;
  }
</style>
