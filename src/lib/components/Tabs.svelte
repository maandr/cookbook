<script context="module">
  export const TABS = 'tabs' // instance reference
</script>

<script lang="ts">
  import { onDestroy, setContext } from 'svelte'
  import { writable, type Writable } from 'svelte/store'

  const tabs: Tab[] = []
  const panels: Panel[] = []
  const selectedTab: Writable<Tab> = writable(tabs[0])
  const selectedPanel: Writable<Panel> = writable(panels[0])
  const ctx: TabsContext = {
    registerTab: (tab: Tab) => {
      tabs.push(tab)
      selectedTab.update((current: Tab) => current || tab)

      onDestroy(() => {
        const i = tabs.indexOf(tab)
        tabs.splice(i, 1)
        selectedTab.update((current: Tab) =>
          current === tab ? tabs[i] || tabs[tabs.length - 1] : current
        )
      })
    },
    registerPanel: (panel: Panel) => {
      panels.push(panel)
      selectedPanel.update((current: Panel) => current || panel)

      onDestroy(() => {
        const i = panels.indexOf(panel)
        panels.splice(i, 1)
        selectedPanel.update((current) =>
          current === panel ? panels[i] || panels[panels.length - 1] : current
        )
      })
    },
    selectTab: (tab: Tab) => {
      const i = tabs.indexOf(tab)
      selectedTab.set(tab)
      selectedPanel.set(panels[i])
    },
    selectedTab,
    selectedPanel
  }
  setContext(TABS, ctx)
</script>

<div class="tab-view">
  <slot />
</div>
