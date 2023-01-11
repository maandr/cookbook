<script lang="ts">
  import type { Recipe } from '$types/recipe'

  export let data: Recipe
</script>

<img src="/images/{data.slug}.jpg" title={data.title} alt={data.title} />

<h1>{data.title}</h1>

<h2>Zutaten</h2>
<ul>
  {#each data.ingrediences as ingredience}
    <li>
      <span
        >{#if ingredience.quantity}{ingredience.quantity.amount}
          {ingredience.quantity.unit}{/if}</span
      ><span>{ingredience.name}</span>
    </li>
  {/each}
</ul>

<h2>Anleitung</h2>
<ol>
  {#each data.instructions as instruction}
    <li>{instruction}</li>
  {/each}
</ol>

<style lang="postcss">
  h1 {
    @apply my-6 font-handwriting text-3xl text-colorPrimary;
  }

  h2 {
    @apply my-4;
    @apply font-bold;
  }

  ul {
    @apply list-none;
    @apply pl-4;
  }

  ul li {
    @apply flex;
    @apply flex-row;
    @apply gap-4;
  }

  ul li span:first-child {
    @apply text-right;
    @apply w-20;
  }

  ul li span:last-child {
    @apply flex-grow;
  }

  ol {
    @apply list-decimal;
    @apply list-outside;
    @apply pl-7;
  }

  ol li {
    @apply pl-4;
    @apply py-2;
  }
</style>
