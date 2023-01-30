<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import IsValid from './IsValid.svelte'

  export let value: string
  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let tabindex: number | undefined = undefined
  export let isValid: ((value: string) => boolean) | undefined = undefined
  export let minRows = 1
  export let maxRows: number | undefined = undefined

  const dispatch = createEventDispatcher()

  let hasFocus = false

  $: minHeight = `${1 + minRows * 1}em`
  $: maxHeight = maxRows ? `${1 + maxRows * 1}em` : 'auto'
</script>

<div
  class="relative flex w-full flex-row items-center gap-3 border-2 border-surfaceAccent bg-white"
  class:focus={hasFocus}
>
  <div
    aria-hidden="true"
    style="min-height: {minHeight}; max-height: {maxHeight};"
    class="whitespace-pre-wrap break-words px-5 py-3 text-lg text-inherit opacity-0"
  >
    {value}
  </div>
  <textarea
    class="absolute inset-0 resize-none break-words px-3 py-2 text-sm outline-none"
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
