<script lang="ts">
  import type { Recipe } from '$types/recipe'

  export let data: { recipes: Recipe[] }
</script>

<div class="mt-8">
  <ul class="grid list-none grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {#each data.recipes as recipe}
      <a href="/recipe/{recipe.slug}" title={recipe.title}
        ><li
          class="relative h-96 bg-cover bg-center bg-no-repeat text-center align-bottom shadow-xl transition-all hover:scale-105"
          style="background-image: url('{recipe.imagePath}')"
        >
          <div class="absolute bottom-0 left-0 h-16 w-full">
            <div class="relative flex h-full items-center justify-center">
              <div
                class="absolute top-0 bottom-0 left-0 right-0 z-10"
                style="background: rgba(0,0,0, 0.4)"
              />
              <h3 class="z-20 w-full flex-grow font-handwriting text-xl text-white">
                {recipe.title}
              </h3>
            </div>
          </div>
        </li></a
      >
    {/each}
  </ul>
</div>
