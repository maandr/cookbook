<script lang="ts">
  import Image from '$components/Icons/Image.svelte'
  import { createEventDispatcher } from 'svelte'

  export let fileName: string

  let fileInput: HTMLInputElement
  let files: FileList

  const dispatch = createEventDispatcher()

  async function getBase64(image: Blob) {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = async (event: ProgressEvent<FileReader>) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
      // data:[<mediatype>][;base64],<data>
      const dataUrl: string = event.target?.result as string
      if (dataUrl) {
        await upload(dataUrl)
        fileName = '/images/' + fileNameWithExtension(dataUrl)
        dispatch('upload_succeeded', fileName)
      }
    }
  }

  async function upload(dataUrl: string) {
    try {
      await fetch('/api/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          fileName: fileNameWithExtension(dataUrl),
          dataBase64Encoded: base64Payload(dataUrl)
        } as ImageUploadRequestPayload)
      })
    } catch (e: unknown) {
      console.error(e)
    }
  }

  function fileNameWithExtension(imageBase64: string): string {
    return `${fileName}.${mineType(imageBase64).split('/')[1]}`
  }

  function mineType(imageBase64: string): string {
    return imageBase64.split(';')[0].split(':')[1]
  }

  function base64Payload(imageBase64: string): string {
    return imageBase64.split(',')[1]
  }
</script>

<button class="min-h-[300px] w-full bg-surface text-secondary" on:click={() => fileInput.click()}>
  {#if fileName}
    <img src={fileName} alt="Uploaded File" />
  {:else}
    <div class="flex items-center justify-center gap-4"><Image /> Bild hochladen</div>
  {/if}
</button>
<input
  hidden
  type="file"
  accept=".png,.jpg"
  bind:this={fileInput}
  bind:files
  on:change={() => getBase64(files[0])}
/>
