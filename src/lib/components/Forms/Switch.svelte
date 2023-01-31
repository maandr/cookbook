<script context="module">
  export const SWITCH = 'switch' // instance reference
</script>

<script lang="ts">
  import { createEventDispatcher, setContext } from 'svelte'
  import { writable, type Writable } from 'svelte/store'

  export let value: any

  const selected: Writable<any[]> = writable(value)
  const dispatch = createEventDispatcher()

  setContext(SWITCH, {
    selected,
    select: (option: any) => {
      dispatch('change', { previous: $selected, new: option })
      selected.set(option)
    }
  })
</script>

<div class="flex flex-row gap-2">
  <slot />
</div>
