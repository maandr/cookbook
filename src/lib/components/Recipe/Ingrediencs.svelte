<script lang="ts">
  export let recipe: Recipe
  export let factor = 1
  export let showOnlyRequired = false
  export let showQuantities = true
</script>

<table>
  {#each recipe.ingrediences.filter((i) => (showOnlyRequired ? i.required : true)) as ingredience}
    <tr>
      {#if showQuantities}
        <td class="pr-4 text-right text-secondaryAccent"
          >{#if ingredience.quantity.amount > 0}{ingredience.quantity.amount * factor}
            {ingredience.quantity.unit}{/if}</td
        >
      {/if}
      <td class:text-primary={!ingredience.required} class="text-left"
        >{ingredience.name}<span class="ml-1 italic"
          >{ingredience.required ? '' : '(optional)'}</span
        ></td
      >
    </tr>
  {/each}
</table>
