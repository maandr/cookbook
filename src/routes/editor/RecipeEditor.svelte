<script lang="ts">
  import { getCategory } from '$lib/utils/recipeHelpers'
  import { hasMinLength, isAPositiveNumber, isNotBlank } from '$lib/utils/validationHelpers'
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
  import ImageUpload from '$components/Forms/ImageUpload.svelte'
  import Image from '$components/Icons/Image.svelte'
  import { goto } from '$app/navigation'
  import Portal from '$components/Portal.svelte'
  import Modal from '$components/Modal.svelte'
  import Refresh from '$components/Icons/Refresh.svelte'

  export let recipe: Recipe
  let imagePath = recipe.imagePath ? recipe.imagePath : '/images/default.jpg'
  let saveAttemptFailed = false
  let uploadAttemptFailed = false

  $: json = JSON.stringify(
    {
      ...recipe,
      imagePath,
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

  async function save() {
    const response = await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })

    if (response.ok) {
      goto('/recipe/' + recipe.id)
    } else {
      saveAttemptFailed = true
    }
  }
</script>

<svelte:head>
  <title>Edit: {recipe.title}</title>
</svelte:head>

<ContextBar>
  <WidthDelimiter>
    <div class="grid grid-cols-12 place-content-center gap-2 p-4">
      <div class="col-span-1">
        <a href="/"><ChevronLeft /></a>
      </div>
      <div class="col-span-9 font-handwriting text-lg md:text-xl">
        {recipe.title}
      </div>
      <div class="col-span-2 flex justify-end">
        <button
          disabled={!isValid}
          class="flex flex-row items-center gap-2 disabled:text-attention"
          on:click={() => save()}
        >
          {#if !isValid}
            Fülle alle Felder aus <Attention />
          {:else}
            Speichern <Save />
          {/if}
        </button>
      </div>
    </div>
  </WidthDelimiter>
</ContextBar>

<Tabs>
  <TabBar>
    <Tab><Edit width={18} height={18} /> Editor</Tab>
    <Tab><Image width={18} height={18} /> Bild</Tab>
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
      <div class="h-full w-full">
        <ImageUpload
          fileName={recipe.id}
          bind:imagePath
          on:upload_failed={() => {
            uploadAttemptFailed = true
          }}
        />
      </div>
    </TabPanel>
    <TabPanel>
      <Document {json} onChange={(json) => parseJson(json)} />
    </TabPanel>
  </div>
</Tabs>

<Portal>
  <Modal bind:isVisible={uploadAttemptFailed}>
    <h2 class="my-2 text-sm font-semibold text-attention">Bild konnte nicht gespeichert werden</h2>
    <p class="text-sm">
      Das Bild entspricht nicht den Größenvorgaben. Stelle sicher, dass das Bild eine Dateigröße von
      1 MB nicht überschreitet.
    </p>
    <button class="button-primary" on:click={() => (uploadAttemptFailed = false)}>
      Versanden
    </button>
  </Modal>

  <Modal bind:isVisible={saveAttemptFailed}>
    <h2 class="my-2 text-sm font-semibold text-attention">
      Änderungen konnten nicht gespeichert werden
    </h2>
    <p class="text-sm">
      Entweder stimmt etwas mit der Internet verbindung nicht oder der Server hat grade ein problem.
      Versuche es am besten etwas später nochmal.
    </p>
    <button class="button-primary" on:click={() => save()}>
      <Refresh width={18} height={18} /> Nochmal versuchen
    </button>
  </Modal>
</Portal>
