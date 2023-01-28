<script lang="ts">
  import Bowl from '$components/Icons/Bowl.svelte'
  import Cake from '$components/Icons/Cake.svelte'
  import Drink from '$components/Icons/Drink.svelte'
  import Filter from '$components/Icons/Filter.svelte'
  import IceCream from '$components/Icons/IceCream.svelte'
  import Portion from '$components/Icons/Portion.svelte'
  import { filter } from '$lib/stores'
</script>

{#if $filter.mustHaveTags.includes('salad')}
  <Bowl />
{:else if $filter.mustHaveTags.includes('meal')}
  <Portion />
{:else if $filter.mustHaveTags.includes('dessert')}
  <IceCream />
{:else if $filter.mustHaveTags.includes('baking')}
  <Cake />
{:else if $filter.mustHaveTags.includes('drink')}
  <Drink />
{:else}
  <Filter />
{/if}
