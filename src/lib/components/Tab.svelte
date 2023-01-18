<script lang="ts">
  import { getContext } from 'svelte'
  import { TABS } from './Tabs.svelte'

  const self: Tab = {} // self reference
  const { selectedTab, selectTab, registerTab }: TabsContext = getContext(TABS)

  registerTab(self)
</script>

<button
  class:selected={$selectedTab === self}
  class="flex flex-wrap gap-2 bg-secondaryAccent px-6 py-3 font-handwriting text-secondary"
  tabindex="-1"
  on:click={() => selectTab(self)}><slot /></button
>

<style lang="postcss">
  .selected {
    @apply bg-secondary text-primary;
  }
</style>
