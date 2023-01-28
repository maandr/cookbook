<script lang="ts">
  export let recipe: Recipe
</script>

<ol class="list-outside list-decimal py-4 pl-8 md:pl-12">
  {#each recipe.instructions as instruction}
    <li class="px-4 py-2">
      {instruction}
    </li>
  {/each}
</ol>
