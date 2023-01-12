<script lang="ts">
  import type { Recipe } from '$types/recipe'
  import NutritionalConcept from '$components/NutritionalConcept.svelte'
  import IngredienceList from '$components/IngredienceList.svelte'

  export let recipe: Recipe
</script>

<a href="/recipe/{recipe.slug}" title={recipe.title}>
  <div
    class="recipe-card relative h-96 bg-cover bg-center bg-no-repeat text-center align-bottom transition-all hover:scale-105 hover:shadow-xl"
    style="background-image: url('{recipe.imagePath}')"
  >
    <div class="nutrional-concept absolute top-0 left-0 z-20 w-full p-3">
      <NutritionalConcept {recipe} size={16} />
    </div>

    <div
      class="ingredience-list absolute top-0 left-0 bottom-0 w-full p-3 pt-6"
      style="background-color: rgba(255, 255, 255, 0.5)"
    >
      <IngredienceList {recipe} showOnlyRequired={true} />
    </div>

    <div class="absolute bottom-0 left-0 h-16 w-full">
      <div class="relative flex h-full items-center justify-center">
        <div
          class="absolute top-0 bottom-0 left-0 right-0 z-10"
          style="background: rgba(0,0,0, 0.5)"
        />
        <h3 class="z-20 w-full flex-grow font-handwriting text-xl text-colorSecondary">
          {recipe.title}
        </h3>
      </div>
    </div>
  </div>
</a>

<style lang="postcss">
  .recipe-card .nutrional-concept {
    @apply opacity-0;
    @apply translate-x-6;
    @apply transition-all;
  }

  .recipe-card:hover .nutrional-concept {
    @apply opacity-100;
    @apply translate-x-0;
  }

  .recipe-card .ingredience-list {
    @apply opacity-0;
    @apply -translate-x-6;
    @apply transition-all;
  }

  .recipe-card:hover .ingredience-list {
    @apply opacity-100;
    @apply translate-x-0;
  }
</style>
