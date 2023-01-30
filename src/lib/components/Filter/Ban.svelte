<script>
  import Slash from '$components/Icons/Slash.svelte'
</script>

<div class="relative p-1">
  <div class="absolute inset-0 text-primaryContrast opacity-90">
    <Slash width={24} height={24} />
  </div>
  <slot />
</div>
