<script>
  import Ban from '$components/Icons/Ban.svelte'
</script>

<div class="relative p-2">
  <div class="absolute inset-0 opacity-60"><Ban width={34} height={34} /></div>
  <slot />
</div>
