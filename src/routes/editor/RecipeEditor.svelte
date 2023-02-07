<script lang="ts">
  import { getCategory } from '$lib/utils/recipeHelpers'
  import { goto } from '$app/navigation'
  import { hasMinLength, isAPositiveNumber, isNotBlank } from '$lib/utils/validationHelpers'
  import Check from '$components/Icons/Check.svelte'
  import ChevronLeft from '$components/Icons/ChevronLeft.svelte'
  import Close from '$components/Icons/Close.svelte'
  import Document from './Document.svelte'
  import Edit from '$components/Icons/Edit.svelte'
  import Editor from './Editor.svelte'
  import File from '$components/Icons/File.svelte'
  import Image from '$components/Icons/Image.svelte'
  import ImageUpload from '$components/Forms/ImageUpload.svelte'
  import Menu from '$components/Menu/Menu.svelte'
  import MenuBar from '$components/Menu/MenuBar.svelte'
  import Modal from '$components/Modal.svelte'
  import Portal from '$components/Portal.svelte'
  import Refresh from '$components/Icons/Refresh.svelte'
  import Save from '$components/Icons/Save.svelte'
  import Tab from '$components/Tabs/Tab.svelte'
  import TabBar from '$components/Tabs/TabBar.svelte'
  import TabPanel from '$components/Tabs/TabPanel.svelte'
  import Tabs from '$components/Tabs/Tabs.svelte'

  export let recipe: Recipe
  let imagePath = recipe.imagePath ? recipe.imagePath : '/images/default.jpg'
  let saveAttemptFailed = false
  let uploadAttemptFailed = false
  let isExpanded = false

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

<Menu bind:isExpanded>
  <div slot="bar">
    <MenuBar>
      <div slot="left"><a href="/"><ChevronLeft width={18} height={18} /></a></div>
      <div slot="center">
        {#if !isValid}
          <div class="center gap-2 text-attention">
            Eingaben sind nicht ok<Close width={18} height={18} />
          </div>
        {:else}
          <div class="center gap-2 text-success">
            Eingaben sind ok<Check width={18} height={18} />
          </div>
        {/if}
      </div>
      <div slot="right" class="flex justify-end">
        <button disabled={!isValid} class="center" on:click={() => save()}>
          {#if isValid}
            <Save width={18} height={18} />
          {/if}
        </button>
      </div>
    </MenuBar>
  </div>
  <div slot="menu" />
</Menu>

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
