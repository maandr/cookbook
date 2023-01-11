<script lang="ts">
  import RecipeView from '$components/RecipeView.svelte'
  import type { Recipe } from '$types/recipe'

  export let data: Recipe
</script>

<RecipeView recipe={data} />
