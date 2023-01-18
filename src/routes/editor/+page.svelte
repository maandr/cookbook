<script lang="ts">
  import RecipeEditor from './RecipeEditor.svelte'
</script>

<RecipeEditor
  recipe={{
    title: '',
    slug: '',
    tags: [],
    amountOfServings: 1,
    amountOfMinutesRequired: 30,
    containsMeat: false,
    containsFish: false,
    containsGluten: false,
    containsLactose: false,
    containsAlcohol: false,
    ingrediences: [{ name: '', quantity: { amount: 0, unit: '' }, required: true }],
    instructions: [''],
    imagePath: ''
  }}
/>
