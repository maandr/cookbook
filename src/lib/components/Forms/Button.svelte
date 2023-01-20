<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let disabled = false
  export let id: string | undefined = undefined
  export let name: string | undefined = undefined
  export let tabindex: number | undefined = undefined

  const dispatch = createEventDispatcher()
</script>

<button
  class="center gap-2 rounded bg-primaryAccent py-2 px-4 text-lg text-background hover:scale-110 hover:bg-primary disabled:bg-slate-400"
  {id}
  {name}
  {disabled}
  {tabindex}
  on:click={() => dispatch('click')}
>
  <slot />
</button>
