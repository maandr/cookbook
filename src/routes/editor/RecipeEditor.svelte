<script lang="ts">
  import { goto } from '$app/navigation'
  import { hasMinLength, isAPositiveNumber, isNotBlank } from '$lib/utils/validationHelpers'
  import { toSlug } from '$lib/utils/stringHelpers'
  import Button from '$components/Forms/Button.svelte'
  import Close from '$components/Icons/Close.svelte'
  import Document from './Document.svelte'
  import Edit from '$components/Icons/Edit.svelte'
  import Editor from './Editor.svelte'
  import Export from '$components/Icons/Export.svelte'
  import File from '$components/Icons/File.svelte'
  import Tab from '$components/Tab.svelte'
  import TabBar from '$components/TabBar.svelte'
  import TabPanel from '$components/TabPanel.svelte'
  import Tabs from '$components/Tabs.svelte'

  export let recipe: Recipe

  $: json = JSON.stringify(
    {
      ...recipe,
      slug: recipe.slug ? recipe.slug : toSlug(recipe.title), // TODO: make sure its always unique
      ingrediences: recipe.ingrediences.filter((i) => i.name.trim() !== ''),
      instructions: recipe.instructions.filter((i) => i.trim() !== '')
    },
    null,
    2
  )

  $: isValid =
    hasMinLength(recipe.title, 3) &&
    isAPositiveNumber(recipe.amountOfServings) &&
    isAPositiveNumber(recipe.amountOfMinutesRequired) &&
    recipe.ingrediences.filter((i) => isNotBlank(i.name)).length > 0 &&
    recipe.instructions.filter((i) => isNotBlank(i)).length > 0

  function parseJson(json: string) {
    recipe = JSON.parse(json)
  }
</script>

<svelte:head>
  <title>Rezept Crafter | {recipe.title} Cookbook</title>
</svelte:head>

<Tabs>
  <TabBar>
    <Tab><Edit /> Editor</Tab>
    <Tab><File /> Document</Tab>
  </TabBar>
  <div class="border-2 border-t-0 border-surfaceAccent bg-surface p-5">
    <TabPanel>
      <Editor
        bind:title={recipe.title}
        bind:tags={recipe.tags}
        bind:amountOfServings={recipe.amountOfServings}
        bind:amountOfMinutesRequired={recipe.amountOfMinutesRequired}
        bind:containsMeat={recipe.containsMeat}
        bind:containsFish={recipe.containsFish}
        bind:containsGluten={recipe.containsGluten}
        bind:containsLactose={recipe.containsLactose}
        bind:containsAlcohol={recipe.containsAlcohol}
        bind:ingrediences={recipe.ingrediences}
        bind:instructions={recipe.instructions}
      />
    </TabPanel>
    <TabPanel>
      <Document {json} onChange={(json) => parseJson(json)} />
    </TabPanel>

    <div class="mt-3 flex w-full flex-wrap justify-end gap-2">
      <Button
        on:click={() => {
          recipe.slug.length > 0 ? goto('/recipe/' + recipe.slug) : goto('/recipes')
        }}
      >
        <Close /> Back
      </Button>
      <form method="POST" action="/editor?/save">
        <input type="hidden" name="recipe" value={json} />
        <Button disabled={!isValid}>
          <Export /> Save
        </Button>
      </form>
    </div>
  </div>
</Tabs>
