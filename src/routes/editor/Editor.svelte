<script lang="ts">
  import { hasMinLength, isNumberBetween } from '$lib/utils/validationHelpers'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Clock from '$components/Icons/Clock.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import IngredienceInput from './IngredienceInput.svelte'
  import Input from '$components/Forms/Input.svelte'
  import InstructionInput from './InstructionInput.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import TagInput from '$components/Forms/TagInput.svelte'
  import ToggleButton from '$components/Forms/ToggleButton.svelte'

  export let title: string
  export let tags: string[]
  export let amountOfServings: number
  export let amountOfMinutesRequired: number
  export let containsMeat: boolean
  export let containsFish: boolean
  export let containsGluten: boolean
  export let containsLactose: boolean
  export let containsAlcohol: boolean
  export let ingrediences: Ingredience[]
  export let instructions: string[]
</script>

<div class="mt-4">
  <fieldset>
    <label for="title">Title</label>
    <Input
      tabindex={1}
      name="title"
      bind:value={title}
      isValid={(value) => hasMinLength(value, 3)}
    />
  </fieldset>

  <fieldset>
    <label for="tags">Tags</label>
    <TagInput tabindex={2} name="tags" bind:tags />
  </fieldset>

  <div class="grid grid-cols-1 gap-x-6 md:grid-cols-2">
    <fieldset>
      <label for="amountOfServings">Portionen</label>
      <Input
        tabindex={3}
        name="amountOfServings"
        bind:value={amountOfServings}
        isValid={(value) => isNumberBetween(value, 1, 16)}
      >
        <Portion width={18} height={18} />
      </Input>
    </fieldset>

    <fieldset>
      <label for="amountOfMinutesRequired">Zubereitungszeit</label>
      <Input
        tabindex={4}
        name="amountOfMinutesRequired"
        bind:value={amountOfMinutesRequired}
        isValid={(value) => isNumberBetween(value, 1, 500)}
      >
        <Clock width={18} height={18} />
      </Input>
    </fieldset>
  </div>

  <fieldset>
    <label for="nutrionalConcept">Ernährungshinweise</label>
    <div class="mb-4 flex flex-col gap-4 md:flex-row md:flex-wrap">
      <ToggleButton tabindex={5} bind:value={containsMeat}>
        <Meat width={18} height={18} />
        Fleisch
      </ToggleButton>
      <ToggleButton tabindex={6} bind:value={containsFish}>
        <Fish width={18} height={18} />
        Fisch
      </ToggleButton>
      <ToggleButton tabindex={7} bind:value={containsGluten}>
        <Gluten width={18} height={18} />
        Gluten
      </ToggleButton>
      <ToggleButton tabindex={8} bind:value={containsLactose}>
        <Cheese width={18} height={18} />
        Laktose
      </ToggleButton>
      <ToggleButton tabindex={9} bind:value={containsAlcohol}>
        <Alcohol width={18} height={18} />
        Alkohol
      </ToggleButton>
    </div>
  </fieldset>

  <IngredienceInput bind:entries={ingrediences} tabindex={10} />

  <label for="instructions">Anleitung</label>
  <InstructionInput bind:entries={instructions} tabindex={11 + ingrediences.length * 4} />
</div>

<style lang="postcss">
  fieldset {
    @apply mb-4 text-sm font-semibold;
  }

  label {
    @apply my-2 font-bold;
  }
</style>
