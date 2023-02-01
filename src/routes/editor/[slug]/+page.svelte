<script lang="ts">
  import { isLoading } from '$lib/stores'
  import { onMount } from 'svelte'
  import RecipeEditor from '../RecipeEditor.svelte'

  export let data: Result<Recipe>

  onMount(() => {
    isLoading.set(false)
  })
</script>

<svelte:head>
  <title>Rezept Crafter | {data.payload.title} Cookbook</title>
</svelte:head>

<RecipeEditor recipe={data.payload} />
