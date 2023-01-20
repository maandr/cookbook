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

  $: minHeight = `${minRows * 1.2}em`
  $: maxHeight = maxRows ? `${maxRows * 1.2}em` : 'auto'
</script>

<div
  class="relative flex w-full flex-row items-center gap-3 border-2 border-surfaceAccent bg-white pl-4"
  class:focus={hasFocus}
>
  <pre
    aria-hidden="true"
    style="min-height: {minHeight}; max-height: {maxHeight}; opacity: 0;"
    class="px-5 py-3 text-lg text-inherit">
    {value}
  </pre>
  <textarea
    class="absolute inset-0 px-5 py-3 text-lg outline-none"
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
    @apply border-secondary;
  }
</style>
