<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import Spinner from './Icons/Spinner.svelte'

  let count = 3
  let interval: ReturnType<typeof setInterval>

  $: dots = '.'.repeat(count % 4)

  onMount(() => {
    interval = setInterval(() => {
      count++
    }, 200)
  })

  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<div class="flex flex-col gap-5">
  <div class="rotate"><Spinner width={63} height={64} /></div>
  <p>loading{dots}</p>
</div>

<style lang="postcss">
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }

  .rotate {
    animation: rotation 2s infinite linear;
  }
</style>
