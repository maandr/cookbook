<script context="module">
  export const DRAGDROP = 'dragdrop' // instance reference
</script>

<script lang="ts">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  export let items: any[]

  const isActive = writable<boolean>(false)
  const hoveredPosition = writable<number>(-1)

  setContext(DRAGDROP, {
    items,
    isActive,
    hoveredPosition,

    drag: (event: DragEvent, index: number) => {
      if ($isActive && event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.setData('text/plain', index.toString())
      }
    },

    drop: (event: DragEvent, toPosition: number) => {
      if ($isActive && event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
        const fromPosition = parseInt(event.dataTransfer.getData('text/plain'))
        const sorted = items

        if (fromPosition < toPosition) {
          sorted.splice(toPosition + 1, 0, sorted[fromPosition])
          sorted.splice(fromPosition, 1)
        } else {
          sorted.splice(toPosition, 0, sorted[fromPosition])
          sorted.splice(fromPosition + 1, 1)
        }
        items = sorted
      }
    },

    dragEnter: (event: DragEvent, index: number) => {
      $isActive && hoveredPosition.set(index)
    }
  })
</script>

<svelte:window
  draggable={true}
  on:dragover|preventDefault={() => false}
  on:drop={() => $isActive && hoveredPosition.set(-1)}
/>

<div on:mouseenter={() => isActive.set(true)} on:mouseleave={() => isActive.set(false)}>
  <slot />
</div>
