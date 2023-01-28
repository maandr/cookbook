<script lang="ts">
  import type { MenuEntry } from 'src/global'
  import HideOnMobile from '$components/HideOnMobile.svelte'

  export let entries: MenuEntry[]

  let selectedEntry: MenuEntry
</script>

<svelte:head>
  <title>{selectedEntry ? `${selectedEntry.title} | Cookbook` : 'Cookbook'}</title>
</svelte:head>

<nav>
  <ul class="flex flex-row items-center justify-center gap-1 md:gap-2">
    {#each entries as entry}
      <li class="py-2 md:py-4">
        <a
          class="flex flex-col items-center justify-center gap-2 p-3 text-xs font-semibold text-primary md:w-[74px]"
          class:active={entry.isActive}
          href={entry.href}
          tabindex="-1"
          on:click={() => {
            selectedEntry = entry
            entry.onClick && entry.onClick()
          }}
        >
          <svelte:component this={entry.icon} />
          <HideOnMobile>
            {entry.title}
          </HideOnMobile>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  a.active {
    @apply text-primaryAccent underline;
  }

  a:hover {
    @apply opacity-75;
  }
</style>
