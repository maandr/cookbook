<script lang="ts">
  import type { Recipe } from '$types/Recipe'

  export let recipe: Recipe

  $: textColor =
    recipe.amountOfMinutesRequired > 30
      ? recipe.amountOfMinutesRequired > 60
        ? 'text-attention'
        : 'text-warning'
      : 'text-success'
</script>

<div class="float-left rounded bg-primaryAccent px-2 py-1 {textColor}">
  {recipe.amountOfMinutesRequired} Minuten
</div>
