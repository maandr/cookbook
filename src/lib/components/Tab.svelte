<script lang="ts">
  import { getContext } from 'svelte'
  import { TABS } from './Tabs.svelte'

  const self: Tab = {} // self reference
  const { selectedTab, selectTab, registerTab }: TabsContext = getContext(TABS)

  registerTab(self)
</script>

<button
  class:selected={$selectedTab === self}
  class="flex flex-wrap items-center gap-3 bg-surface px-6 py-3 text-sm text-secondary"
  tabindex="-1"
  on:click={() => selectTab(self)}><slot /></button
>

<style lang="postcss">
  .selected {
    @apply bg-primary text-primaryContrast;
  }
</style>
