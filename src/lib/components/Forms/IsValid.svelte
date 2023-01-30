<script lang="ts">
  import Check from '$components/Icons/Check.svelte'
  import Close from '$components/Icons/Close.svelte'

  export let value: any // eslint-disable-line @typescript-eslint/no-explicit-any
  export let isValid: (value: any) => boolean // eslint-disable-line @typescript-eslint/no-explicit-any
</script>

{#if isValid(value)}
  <div class="center absolute top-0 right-4 h-full text-success opacity-60">
    <Check width={18} height={18} />
  </div>
{:else}
  <div class="center absolute top-0 right-4 h-full text-attention opacity-60">
    <Close width={18} height={18} />
  </div>
{/if}
