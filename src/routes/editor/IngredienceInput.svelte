<script lang="ts">
  import Button from '$components/Forms/Button.svelte'
  import Delete from '$components/Icons/Delete.svelte'
  import Mortar from '$components/Icons/Mortar.svelte'
  import QuantityInput from '$components/Forms/QuantityInput.svelte'
  import TextInput from '$components/Forms/TextInput.svelte'
  import ToggleButton from '$components/Forms/ToggleButton.svelte'

  export let entries: Ingredience[]
  export let tabindex: number | undefined = undefined

  function add() {
    entries = [
      ...entries,
      {
        name: '',
        required: true,
        quantity: { amount: 1, unit: '' }
      }
    ]
  }

  function remove(atIndex: number) {
    entries = entries.filter((e, i) => i !== atIndex)
  }
</script>

<div class="my-4">
  <div class="grid grid-cols-crafterIngredience gap-2">
    <h3>Zutat</h3>
    <h3>Menge</h3>
    <h3>Muss?</h3>
    <div />
  </div>
  {#each entries as entry, i}
    <div class="my-2 grid grid-cols-crafterIngredience gap-2">
      <TextInput
        name="ingredience"
        bind:value={entry.name}
        tabindex={tabindex ? tabindex + i * 4 + 1 : undefined}
      >
        <Mortar width={22} height={22} />
      </TextInput>
      <QuantityInput
        bind:value={entry.quantity}
        tabindex={tabindex ? tabindex + i * 4 + 2 : undefined}
      />
      <ToggleButton
        bind:value={entry.required}
        tabindex={tabindex ? tabindex + i * 4 + 4 : undefined}
      />
      <Button onClick={() => remove(i)}>
        <Delete width={22} height={22} />
      </Button>
    </div>
  {/each}
  <Button onClick={add} tabindex={tabindex ? tabindex + entries.length * 4 + 1 : undefined}>
    ...
  </Button>
</div>

<style lang="postcss">
  h3 {
    @apply font-bold;
  }
</style>
