<script lang="ts">
  export let options: MenuOption[]
</script>

<div class="flex w-full flex-col items-end gap-4">
  {#each options as option}
    <button
      title={option.title}
      class="flex w-full flex-row items-center justify-start gap-3 py-4 text-sm text-secondaryAccent hover:text-primary"
      on:click={option.onClick}
    >
      <svelte:component this={option.icon} width={18} height={18} />
      {option.title}
    </button>
  {/each}
</div>
