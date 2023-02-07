<script lang="ts">
  import { isLoading } from '$lib/stores'
  import { onMount } from 'svelte'
  import Alcohol from '$components/Icons/Alcohol.svelte'
  import Cheese from '$components/Icons/Cheese.svelte'
  import ChevronLeft from '$components/Icons/ChevronLeft.svelte'
  import Clock from '$components/Icons/Clock.svelte'
  import Dots from '$components/Icons/Dots.svelte'
  import Edit from '$components/Icons/Edit.svelte'
  import Fish from '$components/Icons/Fish.svelte'
  import Gluten from '$components/Icons/Gluten.svelte'
  import Ingrediences from '$components/Recipe/Ingrediencs.svelte'
  import Instructions from '$components/Recipe/Instructions.svelte'
  import Meat from '$components/Icons/Meat.svelte'
  import Menu from '$components/Menu/Menu.svelte'
  import MenuBar from '$components/Menu/MenuBar.svelte'
  import MenuOptions from '$components/Menu/MenuOptions.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import { goto } from '$app/navigation'

  export let data: Result<Recipe>

  let isExpanded = false
  let amountOfServings = 4

  $: factor = amountOfServings / data.payload.amountOfServings

  onMount(() => {
    amountOfServings = data.payload.amountOfServings
    isLoading.set(false)
  })
</script>

<svelte:head>
  <title>{data.payload.title}</title>
</svelte:head>

<Menu bind:isExpanded>
  <div slot="bar">
    <MenuBar>
      <div slot="left">
        <a href="/"><ChevronLeft width={18} height={18} /></a>
      </div>
      <div slot="center" class="text-center font-handwriting text-lg md:text-xl">
        {data.payload.title}
      </div>
      <div slot="right" class="flex justify-end">
        <button on:click={() => (isExpanded = true)}><Dots width={18} height={18} /></button>
      </div>
    </MenuBar>
  </div>
  <div slot="menu" class="w-full">
    <MenuOptions
      options={[
        {
          icon: Edit,
          title: 'Rezept bearbeiten',
          onClick: () => {
            goto('/editor/' + data.payload.id)
          }
        }
      ]}
    />
  </div>
</Menu>

<img
  src={data.payload.imagePath}
  title={data.payload.title}
  alt={data.payload.title}
  class="my-6 max-w-full md:max-w-[1024px]"
/>

<div class="my-8 flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-0">
  <div class="border-surface md:col-span-5 md:border-r-[1px]">
    <div class="section-title">
      <h2 class="float-left">Zutaten</h2>
      <div class="float-right flex flex-row items-center justify-end gap-x-4">
        {#if data.payload.containsMeat}
          <div title="Enthält Fleisch"><Meat width={16} height={16} /></div>
        {/if}
        {#if data.payload.containsFish}
          <div title="Enthält Fisch"><Fish width={16} height={16} /></div>
        {/if}
        {#if data.payload.containsGluten}
          <div title="Enthält Gluten"><Gluten width={16} height={16} /></div>
        {/if}
        {#if data.payload.containsLactose}
          <div title="Enthält Laktose"><Cheese width={16} height={16} /></div>
        {/if}
        {#if data.payload.containsAlcohol}
          <div title="Enthält Alkohol"><Alcohol width={16} height={16} /></div>
        {/if}
      </div>
    </div>
    <div class="rounde my-5 flex items-center gap-2 p-2">
      <Portion width={20} height={20} />
      <input
        type="number"
        bind:value={amountOfServings}
        min="1"
        max="15"
        step="1"
        title="Portionen"
        class="outdivne-none bg-transparent p-1 text-center"
      />
      <input
        type="range"
        bind:value={amountOfServings}
        min="1"
        max="16"
        step="1"
        class="mx-2 w-40"
      />
    </div>
    <Ingrediences recipe={data.payload} bind:factor />
  </div>
  <div class="md:col-span-7">
    <div class="section-title">
      <h2 class="float-left">Anleitung</h2>
      <div class="float-right flex flex-row items-center gap-x-2 font-normal">
        <Clock width={16} height={16} />
        ca. {data.payload.amountOfMinutesRequired} Minuten
      </div>
    </div>
    <Instructions recipe={data.payload} />
  </div>
</div>

<style lang="postcss">
  .section-title {
    @apply mb-4 h-[52px] border-t-[1px] border-b-[1px] border-surface p-4 text-sm;
  }

  h2 {
    @apply font-semibold;
  }
</style>
