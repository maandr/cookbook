<script lang="ts">
  import type { Recipe } from '$types/Recipe'

  export let recipe: Recipe
  export let showOnlyRequired = false
</script>

<table>
  {#each recipe.ingrediences.filter((i) => (showOnlyRequired ? i.required : true)) as ingredience}
    <tr>
      <td class="pr-4 text-right text-colorSecondaryAccent"
        >{#if ingredience.quantity}{ingredience.quantity.amount}
          {ingredience.quantity.unit}{/if}</td
      >
      <td
        class:italic={!ingredience.required}
        class:text-colorPrimary={!ingredience.required}
        class="text-left">{ingredience.name}</td
      >
    </tr>
  {/each}
</table>
