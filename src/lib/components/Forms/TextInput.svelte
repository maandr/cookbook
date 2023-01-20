<script lang="ts">
  import IsValid from './IsValid.svelte'

  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let value: string
  export let tabindex: number | undefined = undefined
  export let onChange: ((value: string) => void) | undefined = undefined
  export let isValid: ((value: string) => boolean) | undefined = undefined

  let hasFocus = false
</script>

<div
  class="flex items-center gap-2 border-2 border-transparent bg-white p-3"
  class:focus={hasFocus}
>
  <slot />
  <input
    class="w-full pl-2 text-lg outline-none"
    type="text"
    {id}
    {name}
    {placeholder}
    {tabindex}
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
