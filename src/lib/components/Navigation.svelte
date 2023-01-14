<script lang="ts">
  import { page } from '$app/stores'
  import Close from '$components/Icons/Close.svelte'
  import Menu from '$components/Icons/Menu.svelte'
  import Logo from '$components/Logo.svelte'

  export let entries: MenuEntry[]
  let selectedEntry: MenuEntry
  let isMenuShowing = false
</script>

<svelte:head>
  <!-- svelte-ignore empty-block -->
  {#if isMenuShowing}
    <style lang="postcss">
      body {
        @apply overflow-hidden md:overflow-auto;
      }
    </style>
  {/if}

  <title>{selectedEntry ? `${selectedEntry.title} | Cookbook` : 'Cookbook'}</title>
</svelte:head>

<div class="md:hidden">
  <button
    class="fixed top-6 right-6 z-navBarToggle cursor-pointer"
    on:click={() => (isMenuShowing = !isMenuShowing)}
  >
    {#if isMenuShowing}
      <Close width={32} height={32} />
    {:else}
      <Menu width={32} height={32} />
    {/if}
  </button>
</div>

<header
  class="fixed z-navBar h-screen w-full border-secondary bg-secondaryAccent p-8 text-center transition-transform md:relative md:col-span-3 md:h-full md:translate-x-0 md:border-r-[12px]"
  class:-translate-x-full={!isMenuShowing}
  class:translate-x-0={isMenuShowing}
>
  <Logo />
  <nav class="list-none font-handwriting text-2xl font-bold">
    <ul>
      {#each entries as entry}
        <li class="py-4 text-primary" class:active={$page.url.pathname === entry.href}>
          <a
            href={entry.href}
            on:click={() => {
              isMenuShowing = false
              selectedEntry = entry
            }}>{entry.title}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="postcss">
  li:hover {
    @apply scale-110 text-secondary;
  }

  li.active {
    @apply text-primaryAccent underline;
  }
</style>
