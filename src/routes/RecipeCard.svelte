<script lang="ts">
  import NutritionalConcept from '$components/Recipe/NutritionalConcept.svelte'
  import IngredienceList from '$components/Recipe/Ingrediencs.svelte'
  import FlipCard from '$components/FlipCard.svelte'
  import PreperationTime from '$components/Recipe/PreperationTime.svelte'

  export let recipe: Recipe
</script>

<a href="/recipe/{recipe.slug}" title={recipe.title}>
  <FlipCard speed="fast" addClass="h-96 border-primary">
    <div
      slot="front"
      class="h-full bg-cover bg-center bg-no-repeat text-center"
      style="background-image: url('{recipe.imagePath}')"
    >
      <div
        class="absolute bottom-0 left-0 right-0 z-10 px-2 py-4"
        style="background: rgba(0,0,0, 0.5)"
      >
        <h3 class="z-20 w-full flex-grow font-handwriting text-xl text-secondary">
          {recipe.title}
        </h3>
      </div>
    </div>
    <div
      slot="back"
      class="flex h-full w-full flex-col gap-3 overflow-hidden bg-white p-3 text-sm shadow-xl"
    >
      <div class="z-20">
        <div class="float-left"><PreperationTime {recipe} /></div>
        <div class="float-right"><NutritionalConcept {recipe} size={16} /></div>
      </div>
      <IngredienceList {recipe} showOnlyRequired={true} showQuantities={false} />

      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-10 bg-cover bg-center bg-no-repeat opacity-25"
        style="background-image: url('{recipe.imagePath}')"
      />

      <div class="absolute bottom-0 left-0 right-0 z-20 px-2 py-4">
        <h3 class="z-20 w-full flex-grow font-handwriting text-xl text-secondaryAccent">
          {recipe.title}
        </h3>
      </div>
    </div>
  </FlipCard>
</a>
