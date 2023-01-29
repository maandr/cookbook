<script>
  import Ban from '$components/Icons/Ban.svelte'
</script>

<div class="relative p-1">
  <div class="absolute inset-0 text-primaryContrast opacity-50">
    <Ban width={25} height={25} />
  </div>
  <slot />
</div>
