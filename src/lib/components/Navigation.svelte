<script lang="ts">
  import { page } from '$app/stores'
  import type { MenuEntry } from '$types/MenuEntry'
  import Close from '$components/Icons/Close.svelte'
  import Menu from '$components/Icons/Menu.svelte'
  import Logo from '$components/Logo.svelte'

  export let entries: MenuEntry[]
  let isMenuShowing = false
</script>

<!-- svelte-ignore empty-block-->
<svelte:head>
  {#if isMenuShowing}
    <style lang="postcss">
      body {
        @apply overflow-hidden md:overflow-auto;
      }
    </style>
  {/if}
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
  class="fixed z-navBar h-screen w-full -translate-x-full bg-colorPrimary p-8 text-center transition-transform md:relative md:col-span-3 md:h-full md:translate-x-0"
  class:translate-x-0={isMenuShowing}
>
  <Logo />
  <nav class="list-none font-handwriting text-2xl font-bold">
    <ul>
      {#each entries as entry}
        <li class="py-4 text-colorSecondaryAccent" class:active={$page.url.pathname === entry.href}>
          <a href={entry.href} on:click={() => (isMenuShowing = false)}>{entry.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="postcss">
  li:hover {
    @apply text-colorBackground;
  }

  li.active {
    @apply text-colorBackgroundAccent;
    @apply underline;
  }
</style>
