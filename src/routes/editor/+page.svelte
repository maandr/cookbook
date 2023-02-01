<script lang="ts">
  import { isLoading } from '$lib/stores'
  import { onMount } from 'svelte'
  import RecipeEditor from './RecipeEditor.svelte'

  onMount(() => {
    isLoading.set(false)
  })
</script>

<RecipeEditor
  recipe={{
    title: '',
    slug: '',
    tags: ['meal'],
    amountOfServings: undefined,
    amountOfMinutesRequired: undefined,
    containsMeat: false,
    containsFish: false,
    containsGluten: false,
    containsLactose: false,
    containsAlcohol: false,
    ingrediences: [],
    instructions: [],
    imagePath: ''
  }}
/>
