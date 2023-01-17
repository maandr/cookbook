<script lang="ts">
  import { DEFAULT_INGREDIENCE } from '$lib/constants'
  import { toSlug } from '$lib/utils/stringHelpers'
  import Document from './Document.svelte'
  import Editor from './Editor.svelte'
  import Tab from '$components/Tab.svelte'
  import TabBar from '$components/TabBar.svelte'
  import TabPanel from '$components/TabPanel.svelte'
  import Tabs from '$components/Tabs.svelte'
  import File from '$components/Icons/File.svelte'
  import Edit from '$components/Icons/Edit.svelte'

  let title = ''
  let tags: string[] = []
  let amountOfServings = 1
  let amountOfMinutesRequired = 10
  let containsMeat = false
  let containsGluten = false
  let containsFish = false
  let containsLactose = false
  let containsAlcohol = false
  let ingrediences: Ingredience[] = [DEFAULT_INGREDIENCE]
  let instructions: string[] = ['']

  $: slug = toSlug(title) // TODO: make sure its always unique
  $: json = JSON.stringify(
    {
      title: title,
      slug: slug,
      tags: tags,
      amountOfServings: amountOfServings,
      amountOfMinutesRequired: amountOfMinutesRequired,
      containsMeat: containsMeat,
      containsFish: containsFish,
      containsGluten: containsGluten,
      containsLactose: containsLactose,
      containsAlcohol: containsAlcohol,
      ingrediences: ingrediences,
      instructions: instructions
    },
    null,
    2
  )

  function paste(json: string) {
    const recipe = JSON.parse(json)
    title = recipe.title
    tags = recipe.tags
    amountOfServings = recipe.amountOfServings
    amountOfMinutesRequired = recipe.amountOfMinutesRequired
    containsMeat = recipe.containsMeat
    containsFish = recipe.containsFish
    containsGluten = recipe.containsGluten
    containsLactose = recipe.containsLactose
    containsAlcohol = recipe.containsAlcohol
    ingrediences = recipe.ingrediences
    instructions = recipe.instructions
  }
</script>

<svelte:head>
  <title>Rezept Crafter | Cookbook</title>
</svelte:head>

<Tabs>
  <TabBar>
    <Tab><Edit /> Editor</Tab>
    <Tab><File /> Document</Tab>
  </TabBar>
  <TabPanel>
    <Editor
      bind:title
      bind:tags
      bind:amountOfServings
      bind:amountOfMinutesRequired
      bind:containsMeat
      bind:containsFish
      bind:containsGluten
      bind:containsLactose
      bind:containsAlcohol
      bind:ingrediences
      bind:instructions
    />
  </TabPanel>
  <TabPanel>
    <Document
      {json}
      onCopy={() => {
        navigator.clipboard.writeText(json)
      }}
      onPaste={async () => {
        paste(await navigator.clipboard.readText())
      }}
    />
  </TabPanel>
</Tabs>
