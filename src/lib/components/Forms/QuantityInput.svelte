<script lang="ts">
  import Scale from '$components/Icons/Scale.svelte'
  import { UNITS } from '$lib/constants'
  import { isNotNegative, isPositive } from '$lib/utils/numberHelpers'
  import { isNotBlank } from '$lib/utils/stringHelpers'
  import IsValid from './IsValid.svelte'

  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let value: Quantity
  export let tabindex: number | undefined = undefined
  export let max: number | undefined = undefined
  export let step: number | undefined = undefined
  export let onChange: ((value: Quantity) => void) | undefined = undefined

  let hasFocus = false
  let hasUnitInputFocus = false

  function unitSuffix(value: string | undefined): string | undefined {
    return value ? `${value}-unit` : value
  }

  $: unitOptions = UNITS.filter((u) =>
    u.toLocaleLowerCase().startsWith(value.unit.toLocaleLowerCase())
  )
</script>

<div
  class="relative grid grid-cols-formsQuantityInput items-center gap-2 border-2 border-transparent bg-white"
  class:focus={hasFocus}
>
  <div class="grid h-full grid-cols-3 items-center gap-2 bg-transparent pl-3">
    <Scale width={22} height={22} />
    <input
      class="h-full pl-2 text-lg outline-none"
      type="text"
      {id}
      {name}
      {tabindex}
      min={0}
      {max}
      {step}
      bind:value={value.amount}
      on:change={() => {
        if (isNaN(value.amount)) {
          value.amount = 0
        }
        onChange && onChange(value)
      }}
      on:focus={() => (hasFocus = true)}
      on:blur={() => (hasFocus = false)}
    />
    <IsValid
      bind:value={value.amount}
      isValid={(v) => (isNotBlank(value.unit) ? isPositive(v) : isNotNegative(v))}
    />
  </div>
  <div class="relative h-full">
    <input
      class="h-full w-full bg-slate-100 pl-2 text-left text-lg text-gray-600 outline-none"
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
</div>

<style lang="postcss">
  .focus {
    @apply border-secondary;
  }
</style>
