<script lang="ts">
  import { CATEGORIES } from '$lib/constants'
  import { containsAny } from '$lib/utils/arrayHelpers'
  import { hasMinLength, isNumberBetween } from '$lib/utils/validationHelpers'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Bowl from '$components/Icons/Bowl.svelte'
  import Cake from '$components/Icons/Cake.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import Clock from '$components/Icons/Clock.svelte'
  import Drink from '$components/Icons/Drink.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import IceCream from '$components/Icons/IceCream.svelte'
  import IngredienceInput from './IngredienceInput.svelte'
  import Input from '$components/Forms/Input.svelte'
  import InstructionInput from './InstructionInput.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import Switch from '$components/Forms/Switch/Switch.svelte'
  import SwitchOption from '$components/Forms/Switch/SwitchOption.svelte'
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
  export let category: string
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
    <label for="category">Kategorie</label>
    <Switch
      bind:value={category}
      on:change={(event) =>
        (tags = [
          event.detail.new,
          ...tags.filter((tag) => ![event.detail.previous, event.detail.new].includes(tag))
        ])}
    >
      <SwitchOption tabindex={2} value="salad"><Bowl /> Salat</SwitchOption>
      <SwitchOption tabindex={3} value="meal"><Portion /> Kochen</SwitchOption>
      <SwitchOption tabindex={4} value="dessert"><IceCream /> Dessert</SwitchOption>
      <SwitchOption tabindex={5} value="baking"><Cake /> Backen</SwitchOption>
      <SwitchOption tabindex={6} value="drink"><Drink /> Drinks</SwitchOption>
    </Switch>
  </fieldset>

  <fieldset>
    <label for="tags">Tags</label>
    <TagInput
      tabindex={7}
      name="tags"
      bind:tags
      on:change={(event) => {
        if (!containsAny(event.detail.tags, CATEGORIES)) {
          tags = [category, ...tags]
        }
      }}
    />
  </fieldset>

  <div class="grid grid-cols-1 gap-x-6 md:grid-cols-2">
    <fieldset>
      <label for="amountOfServings">Portionen</label>
      <Input
        tabindex={8}
        name="amountOfServings"
        bind:value={amountOfServings}
        isValid={(value) => isNumberBetween(value, 1, 16)}
      >
        <Portion width={18} height={18} />
      </Input>
    </fieldset>

    <fieldset>
      <label for="amountOfMinutesRequired">Zubereitungszeit (in Minuten)</label>
      <Input
        tabindex={9}
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
      <ToggleButton tabindex={10} bind:value={containsMeat}>
        <Meat width={18} height={18} />
        Fleisch
      </ToggleButton>
      <ToggleButton tabindex={11} bind:value={containsFish}>
        <Fish width={18} height={18} />
        Fisch
      </ToggleButton>
      <ToggleButton tabindex={12} bind:value={containsGluten}>
        <Gluten width={18} height={18} />
        Gluten
      </ToggleButton>
      <ToggleButton tabindex={13} bind:value={containsLactose}>
        <Cheese width={18} height={18} />
        Laktose
      </ToggleButton>
      <ToggleButton tabindex={14} bind:value={containsAlcohol}>
        <Alcohol width={18} height={18} />
        Alkohol
      </ToggleButton>
    </div>
  </fieldset>

  <fieldset>
    <label for="ingredience">Zutaten</label>
    <IngredienceInput bind:entries={ingrediences} tabindex={15} />
  </fieldset>

  <fieldset>
    <label for="instructions">Anleitung</label>
    <InstructionInput bind:entries={instructions} tabindex={16 + ingrediences.length * 4} />
  </fieldset>
</div>

<style lang="postcss">
  fieldset {
    @apply mb-4;
  }

  label {
    @apply block py-2 text-sm font-semibold;
  }
</style>
