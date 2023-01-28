<script lang="ts">
  export let recipe: Recipe
  export let factor = 1
  export let showOnlyRequired = false
  export let showQuantities = true

  function quantityFormatted(ingredience: Ingredience, factor: number): string {
    return ingredience.quantity.amount > 0
      ? Math.ceil(ingredience.quantity.amount * factor).toFixed(0) + ' ' + ingredience.quantity.unit
      : ''
  }
</script>

<table>
  {#each recipe.ingrediences.filter((i) => (showOnlyRequired ? i.required : true)) as ingredience}
    <tr>
      {#if showQuantities}
        <td class="min-w-[90px] py-1 pr-5 text-right font-semibold text-primary">
          {quantityFormatted(ingredience, factor)}
        </td>
      {/if}
      <td class:text-primary={!ingredience.required} class="text-left">
        {ingredience.name}
        <span class="ml-1 italic">{ingredience.required ? '' : '(optional)'}</span>
      </td>
    </tr>
  {/each}
</table>

<style lang="postcss">
  td {
    @apply my-1;
  }
</style>
