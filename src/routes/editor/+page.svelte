<script lang="ts">
  import { isLoading } from '$lib/stores'
  import { onMount } from 'svelte'
  import RecipeEditor from './RecipeEditor.svelte'
  import { v4 } from 'uuid'

  onMount(() => {
    isLoading.set(false)
  })
</script>

<RecipeEditor
  recipe={{
    id: v4(),
    title: '',
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
