<script lang="ts">
  import { filter } from '$lib/stores'
</script>

{#if $filter.mustHaveTags.includes('salad')}
  Salat
{:else if $filter.mustHaveTags.includes('meal')}
  Kochen
{:else if $filter.mustHaveTags.includes('dessert')}
  Dessert
{:else if $filter.mustHaveTags.includes('baking')}
  Backen
{:else if $filter.mustHaveTags.includes('drink')}
  Drinks
{/if}
