<script lang="ts">
  import RecipeEditor from './RecipeEditor.svelte'
</script>

<RecipeEditor
  recipe={{
    title: '',
    slug: '',
    tags: [],
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
