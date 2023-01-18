<script lang="ts">
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Clock from '$components/Icons/Clock.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import IngredienceInput from './IngredienceInput.svelte'
  import InstructionInput from './InstructionInput.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import NumberInput from '$components/Forms/NumberInput.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import TagInput from '$components/Forms/TagInput.svelte'
  import TextInput from '$components/Forms/TextInput.svelte'
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

<fieldset>
  <label for="title">Title</label>
  <TextInput tabindex={1} name="title" bind:value={title} />
</fieldset>

<fieldset>
  <label for="tags">Tags</label>
  <TagInput tabindex={2} name="tags" bind:tags />
</fieldset>

<fieldset>
  <label for="amountOfServings">Portionen</label>
  <NumberInput
    tabindex={3}
    name="amountOfServings"
    bind:value={amountOfServings}
    min={1}
    max={15}
    step={1}
  >
    <Portion width={22} height={22} />
  </NumberInput>
</fieldset>

<fieldset>
  <label for="amountOfMinutesRequired">Zubereitungszeit</label>
  <NumberInput
    tabindex={4}
    name="amountOfMinutesRequired"
    bind:value={amountOfMinutesRequired}
    min={1}
    max={500}
    step={1}
  >
    <Clock width={22} height={22} />
  </NumberInput>
</fieldset>

<fieldset>
  <label for="nutrionalConcept">Ernährungshinweise</label>
  <div class="mb-4 flex flex-wrap gap-2">
    <ToggleButton tabindex={5} bind:value={containsMeat}>
      <Meat />
      <p class="hidden lg:block">Fleisch</p>
    </ToggleButton>
    <ToggleButton tabindex={6} bind:value={containsFish}>
      <Fish />
      <p class="hidden lg:block">Fisch</p>
    </ToggleButton>
    <ToggleButton tabindex={7} bind:value={containsGluten}>
      <Gluten />
      <p class="hidden lg:block">Gluten</p>
    </ToggleButton>
    <ToggleButton tabindex={8} bind:value={containsLactose}>
      <Cheese />
      <p class="hidden lg:block">Laktose</p>
    </ToggleButton>
    <ToggleButton tabindex={9} bind:value={containsAlcohol}>
      <Alcohol />
      <p class="hidden lg:block">Alkohol</p>
    </ToggleButton>
  </div>
</fieldset>

<IngredienceInput bind:entries={ingrediences} tabindex={10} />

<label for="instructions">Anleitung</label>
<InstructionInput bind:entries={instructions} tabindex={11 + ingrediences.length * 4} />

<style lang="postcss">
  fieldset {
    @apply mb-4;
  }

  label {
    @apply my-2 font-bold;
  }
</style>
