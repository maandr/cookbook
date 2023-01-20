<script lang="ts">
  import IsValid from './IsValid.svelte'

  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let value: number
  export let tabindex: number | undefined = undefined
  export let min: number | undefined = undefined
  export let max: number | undefined = undefined
  export let step: number | undefined = undefined
  export let onChange: ((value: number) => void) | undefined = undefined
  export let isValid: ((value: number) => boolean) | undefined = undefined

  let hasFocus = false
</script>

<div
  class="flex items-center gap-2 border-2 border-transparent bg-white p-3"
  class:focus={hasFocus}
>
  <slot />
  <input
    class="w-full pl-2 text-lg outline-none"
    type="number"
    {id}
    {name}
    {tabindex}
    {min}
    {max}
    {step}
    bind:value
    on:change={() => onChange && onChange(value)}
    on:focus={() => (hasFocus = true)}
    on:blur={() => (hasFocus = false)}
  />
  {#if isValid}
    <IsValid bind:value {isValid} />
  {/if}
</div>

<style lang="postcss">
  .focus {
    @apply border-secondary;
  }
</style>
