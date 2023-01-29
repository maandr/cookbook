<script lang="ts">
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
</script>

<div hidden use:portal>
  <div class="min-h-[60px]">
    <slot />
  </div>
</div>
