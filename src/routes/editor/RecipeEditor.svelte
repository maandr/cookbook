<script lang="ts">
  import { getCategory } from '$lib/utils/recipeHelpers'
  import { hasMinLength, isAPositiveNumber, isNotBlank } from '$lib/utils/validationHelpers'
  import { toSlug } from '$lib/utils/stringHelpers'
  import Attention from '$components/Icons/Attention.svelte'
  import ChevronLeft from '$components/Icons/ChevronLeft.svelte'
  import ContextBar from '$components/ContextBar.svelte'
  import Document from './Document.svelte'
  import Edit from '$components/Icons/Edit.svelte'
  import Editor from './Editor.svelte'
  import File from '$components/Icons/File.svelte'
  import Save from '$components/Icons/Save.svelte'
  import Tab from '$components/Tabs/Tab.svelte'
  import TabBar from '$components/Tabs/TabBar.svelte'
  import TabPanel from '$components/Tabs/TabPanel.svelte'
  import Tabs from '$components/Tabs/Tabs.svelte'
  import WidthDelimiter from '$components/WidthDelimiter.svelte'

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

<ContextBar>
  <WidthDelimiter>
    <div class="grid grid-cols-12 place-items-center gap-2 p-4">
      <div class="col-span-1">
        <a href="/"><ChevronLeft /></a>
      </div>
      <div class="col-span-10 font-handwriting text-lg md:text-xl">
        {recipe.title}
      </div>
      <div class="col-span-1">
        <form method="POST" action="/editor?/save">
          <input type="hidden" name="recipe" value={json} />
          <button disabled={!isValid} class="disabled:text-attention">
            {#if !isValid}
              <Attention />
            {:else}
              <Save />
            {/if}
          </button>
        </form>
      </div>
    </div>
  </WidthDelimiter>
</ContextBar>

<Tabs>
  <TabBar>
    <Tab><Edit width={18} height={18} /> Editor</Tab>
    <Tab><File width={18} height={18} /> Document</Tab>
  </TabBar>
  <div>
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
        category={getCategory(recipe.tags)}
      />
    </TabPanel>
    <TabPanel>
      <Document {json} onChange={(json) => parseJson(json)} />
    </TabPanel>
  </div>
</Tabs>
