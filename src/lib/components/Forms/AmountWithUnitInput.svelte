<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import IsValid from './IsValid.svelte'

  export let value: { amount: number; unit: string }
  export let allowedUnits: string[]
  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let tabindex: number | undefined = undefined
  export let isValid: ((value: any) => boolean) | undefined = undefined // eslint-disable-line @typescript-eslint/no-explicit-any

  let hasFocus = false
  let hasUnitInputFocus = false

  const dispatch = createEventDispatcher()

  function unitSuffix(value: string | undefined): string | undefined {
    return value ? `${value}-unit` : value
  }

  $: unitOptions = allowedUnits.filter((u) =>
    u.toLocaleLowerCase().startsWith(value.unit.toLocaleLowerCase())
  )
</script>

<div
  class="relative grid h-full grid-cols-formsQuantityInput items-center gap-2 border-2 border-surfaceAccent bg-white"
  class:focus={hasFocus}
>
  <div class="relative flex h-full items-center gap-2 bg-transparent px-3">
    <slot />
    <input
      class="h-full w-full text-sm outline-none"
      type="text"
      {id}
      {name}
      {tabindex}
      bind:value={value.amount}
      on:change={() => {
        dispatch('change', { value: value })
      }}
      on:focus={() => (hasFocus = true)}
      on:blur={() => (hasFocus = false)}
    />
  </div>
  <div class="relative h-full">
    <input
      class="h-full w-full bg-surfaceAccent pl-2 text-left text-sm text-secondaryAccent outline-none"
      type="text"
      id={unitSuffix(id)}
      name={unitSuffix(name)}
      tabindex={tabindex ? tabindex + 1 : undefined}
      bind:value={value.unit}
      on:focus={() => (hasUnitInputFocus = true)}
      on:blur={() => (hasUnitInputFocus = false)}
      on:change={() => {
        if (unitOptions.length === 1) {
          value.unit = unitOptions[0]
        } else {
          value.unit = ''
        }
      }}
    />
    <div
      class="absolute top-0 bottom-0 right-0 flex w-fit flex-col items-start justify-center gap-1 px-2 text-gray-500"
      class:hidden={!hasUnitInputFocus || value.unit.length === 0}
    >
      {#if unitOptions.length > 0}
        <button class="cursor-pointer px-1" on:click={() => (value.unit = unitOptions[0])}>
          {unitOptions[0].substring(value.unit.length, unitOptions[0].length)}
        </button>
      {/if}
    </div>
  </div>
  {#if isValid}
    <IsValid bind:value {isValid} />
  {/if}
</div>

<style lang="postcss">
  .focus {
    @apply border-primary;
  }
</style>
