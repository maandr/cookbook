<script lang="ts">
  import { getContext } from 'svelte'
  import { DRAGDROP } from './SortableList.svelte'

  export let index: number

  let { isActive, drag, drop, dragEnter, hoveredPosition }: DragDropContext = getContext(DRAGDROP)
</script>

<div
  draggable={$isActive}
  on:dragstart={(event) => drag(event, index)}
  on:drop|preventDefault={(event) => drop(event, index)}
  on:dragenter={(event) => dragEnter(event, index)}
  on:dragover|preventDefault={() => false}
  class:is-hovered-while-dragging={$isActive && $hoveredPosition === index}
>
  <slot />
</div>

<style lang="postcss">
  .is-hovered-while-dragging {
    @apply bg-primary opacity-50;
  }
</style>
