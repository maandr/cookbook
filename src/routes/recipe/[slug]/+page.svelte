<script lang="ts">
  import RecipeView from '$components/RecipeView.svelte'
  import type { Recipe } from '$types/recipe'

  export let data: Recipe
</script>

<svelte:head>
  <title>{data.title} | Cookbook</title>
</svelte:head>

<RecipeView recipe={data} />
