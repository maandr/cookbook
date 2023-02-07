<script lang="ts">
  import { clickOutside } from '$lib/actions/clickOutside'
  import ChevronUp from '../Icons/ChevronUp.svelte'
  import WidthDelimiter from '../WidthDelimiter.svelte'

  function portal(node: HTMLElement) {
    let target: HTMLBodyElement | null

    function update() {
      target = document.querySelector('#context-bar')
      target?.appendChild(node)
      node.hidden = false
    }

    function destory() {
      if (node.parentNode) {
        node.parentNode.removeChild(node)
      }
    }

    update()

    return { update, destory }
  }

  export let isExpanded: boolean
</script>

<div hidden use:portal>
  <div use:clickOutside={() => (isExpanded = false)}>
    <WidthDelimiter>
      <div class="px-4 md:px-0">
        <slot name="bar" />
      </div>
    </WidthDelimiter>

    <div
      class="max-h-[0px] overflow-hidden bg-background text-primary opacity-75 shadow-xl transition-all"
      class:expanded={isExpanded}
    >
      <WidthDelimiter>
        <div
          class="m-auto flex w-full flex-col items-center justify-center px-4 pt-4 lg:items-start lg:px-0"
        >
          <slot name="menu" {isExpanded} />
          <button
            class="center mb-2 mt-3 w-full p-2 text-secondary"
            on:click={() => (isExpanded = false)}
          >
            <ChevronUp width={18} height={18} />
          </button>
        </div>
      </WidthDelimiter>
    </div>
  </div>
</div>

<style lang="postcss">
  .expanded {
    @apply max-h-[600px] opacity-100;
  }
</style>
