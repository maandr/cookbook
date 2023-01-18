<script lang="ts">
  import { recipesBySlug } from '$lib/stores'
  import RecipeEditor from '../RecipeEditor.svelte'

  export let data: { slug: string }

  $: recipe = $recipesBySlug[data.slug]
</script>

<svelte:head>
  <title>Rezept Crafter | {recipe.title} Cookbook</title>
</svelte:head>

<RecipeEditor {recipe} />
