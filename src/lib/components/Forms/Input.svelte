<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import IsValid from './IsValid.svelte'

  export let value: string
  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let tabindex: number | undefined = undefined
  export let isValid: ((value: string) => boolean) | undefined = undefined

  const dispatch = createEventDispatcher()

  let hasFocus = false
</script>

<div
  class="relative flex w-full flex-row items-center gap-2 border-2 border-surfaceAccent bg-white px-2"
  class:focus={hasFocus}
>
  <slot />
  <input
    class="w-full py-3 pr-5 text-sm outline-none"
    type="text"
    {id}
    {name}
    {tabindex}
    {placeholder}
    bind:value
    on:change={() => dispatch('change', { value })}
    on:focus={() => {
      hasFocus = true
      dispatch('focus')
    }}
    on:blur={() => {
      hasFocus = false
      dispatch('blur')
    }}
    on:click={() => dispatch('click')}
  />
  {#if isValid}
    <IsValid bind:value {isValid} />
  {/if}
</div>

<style lang="postcss">
  .focus {
    @apply border-primary;
  }
</style>
