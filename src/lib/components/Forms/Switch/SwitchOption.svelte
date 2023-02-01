<script lang="ts">
  import { getContext } from 'svelte'
  import { SWITCH } from './Switch.svelte'

  export let value: any
  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let tabindex: number | undefined = undefined

  let { selected, select }: SwitchContext = getContext(SWITCH)
</script>

<button
  class="flex w-full flex-col items-center justify-center gap-2 border-2 border-transparent p-2 text-xs outline-none focus:border-primary md:w-auto md:px-4 md:text-sm"
  class:active={$selected === value}
  {id}
  {name}
  {tabindex}
  on:click={() => select(value)}
>
  <slot />
</button>

<style lang="postcss">
  .active {
    @apply rounded bg-primary text-primaryContrast;
  }
</style>
