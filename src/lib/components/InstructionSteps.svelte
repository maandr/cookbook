<script lang="ts">
  export let recipe: Recipe
</script>

<ol class="list-outside list-decimal pl-7">
  {#each recipe.instructions as instruction}
    <li class="py-2 pl-4">{instruction}</li>
  {/each}
</ol>
