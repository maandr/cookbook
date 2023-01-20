<script lang="ts">
  import Check from '$components/Icons/Check.svelte'
  import Close from '$components/Icons/Close.svelte'

  export let value: any
  export let isValid: (value: any) => boolean
</script>

{#if isValid(value)}
  <div class="text-success opacity-60"><Check /></div>
{:else}
  <div class="text-attention opacity-60"><Close /></div>
{/if}
