<script lang="ts">
  import { getContext } from 'svelte'
  import { TABS } from '$components/Tabs/Tabs.svelte'

  const self: Panel = {} // self reference
  const { registerPanel, selectedPanel }: TabsContext = getContext(TABS)

  registerPanel(self)
</script>

{#if $selectedPanel === self}
  <slot />
{/if}
