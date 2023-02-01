<script lang="ts">
  import FlipCard from '$components/FlipCard.svelte'
  import IngredienceList from '$components/Recipe/Ingrediencs.svelte'
  import NutritionalConcept from '$components/Recipe/NutritionalConcept.svelte'
  import PreperationTime from '$components/Recipe/PreperationTime.svelte'

  export let recipe: Recipe
</script>

<a href="/recipe/{recipe.slug}" title={recipe.title} class="block h-[380px]">
  <FlipCard speed="fast">
    <!-- frontside -->
    <div
      slot="front"
      class="h-full bg-cover bg-center bg-no-repeat text-center"
      style="background-image: url('{recipe.imagePath ? recipe.imagePath : '/images/default.jpg'}')"
    >
      <div
        class="absolute bottom-0 left-0 right-0 z-10 px-2 py-4"
        style="background: rgba(0,0,0, 0.5)"
      >
        <h3 class="z-20 w-full flex-grow font-handwriting text-xl text-primaryContrast">
          {recipe.title}
        </h3>
      </div>
    </div>
    <!-- backside -->
    <div
      slot="back"
      class="flex h-full w-full flex-col gap-3 overflow-hidden bg-background p-3 text-sm shadow-xl"
    >
      <div class="z-20">
        <div class="float-left"><PreperationTime {recipe} /></div>
        <div class="float-right"><NutritionalConcept {recipe} size={16} /></div>
      </div>
      <IngredienceList {recipe} showOnlyRequired={true} showQuantities={false} />

      <div
        class="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat opacity-25"
        style="background-image: url('{recipe.imagePath
          ? recipe.imagePath
          : '/images/default.jpg'}')"
      />

      <h3
        class="absolute inset-0 z-20 flex w-full flex-grow items-end justify-center px-2 py-4 font-handwriting text-xl text-primary"
      >
        {recipe.title}
      </h3>
    </div>
  </FlipCard>
</a>
