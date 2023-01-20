<script lang="ts">
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

<div class="my-4">
  <div class="grid grid-cols-crafterIngredienceMobile gap-2 md:grid-cols-crafterIngredience">
    <h3>Zutat</h3>
    <h3>Menge</h3>
    <h3>Muss?</h3>
    <div />
  </div>
  {#each entries as entry, i}
    <div class="my-2 grid grid-cols-crafterIngredienceMobile gap-2 md:grid-cols-crafterIngredience">
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
</style>
