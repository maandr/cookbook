<script lang="ts">
  import type { Recipe } from '$types/recipe'
  import NutritionalConcept from '$components/NutritionalConcept.svelte'
  import IngredienceList from '$components/IngredienceList.svelte'
  import PreperationTime from './PreperationTime.svelte'

  export let recipe: Recipe
</script>

<a href="/recipe/{recipe.slug}" title={recipe.title}>
  <div
    class="recipe-card relative h-96 bg-cover bg-center bg-no-repeat text-center align-bottom transition-all hover:scale-105 hover:shadow-xl"
    style="background-image: url('{recipe.imagePath}')"
  >
    <div
      class="flipside absolute top-0 left-0 bottom-16 flex w-full flex-col gap-3 overflow-hidden p-3 text-sm"
      style="background-color: rgba(255, 255, 255, 0.35)"
    >
      <div>
        <PreperationTime {recipe} />
        <NutritionalConcept {recipe} size={16} />
      </div>
      <IngredienceList {recipe} showOnlyRequired={true} showQuantities={false} />
    </div>

    <div class="absolute bottom-0 left-0 h-16 w-full">
      <div class="relative flex h-full items-center justify-center">
        <div
          class="absolute top-0 bottom-0 left-0 right-0 z-10"
          style="background: rgba(0,0,0, 0.5)"
        />
        <h3 class="z-20 w-full flex-grow font-handwriting text-xl text-secondary">
          {recipe.title}
        </h3>
      </div>
    </div>
  </div>
</a>

<style lang="postcss">
  .recipe-card .flipside {
    @apply translate-x-6 opacity-0 transition-all;
  }

  .recipe-card:hover .flipside {
    @apply translate-x-0 opacity-100;
  }
</style>
