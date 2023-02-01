<script lang="ts">
  export let speed: 'slow' | 'normal' | 'fast' = 'normal'

  $: secondsPerFlip = speed === 'slow' ? 1.6 : speed === 'normal' ? 0.8 : 0.4
</script>

<div class="flip-card h-full w-full">
  <div class="flip-card-inner" style="transition: transform {secondsPerFlip}s">
    <div class="flip-card-front">
      <slot name="front" />
    </div>
    <div class="flip-card-back">
      <slot name="back" />
    </div>
  </div>
</div>

<style>
  .flip-card {
    background-color: transparent;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>
