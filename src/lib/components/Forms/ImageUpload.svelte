<script lang="ts">
  import Image from '$components/Icons/Image.svelte'
  import { createEventDispatcher } from 'svelte'

  export let fileName: string
  export let imagePath: string | undefined = undefined

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
        imagePath = '/images/default.jpg'
        imagePath = await upload(dataUrl)
        dispatch('upload_succeeded', imagePath)
      }
    }
  }

  async function upload(dataUrl: string): Promise<string> {
    try {
      const payload: ImageUploadRequestPayload = {
        fileName: targetImagePath(dataUrl),
        dataBase64Encoded: base64Payload(dataUrl)
      }
      await fetch('/api/upload-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
      return Promise.resolve(payload.fileName)
    } catch (e: unknown) {
      console.error(e)
      return Promise.reject(e)
    }
  }

  function targetImagePath(imageBase64: string): string {
    return `/images/${fileName}.${mineType(imageBase64).split('/')[1]}`
  }

  function mineType(imageBase64: string): string {
    return imageBase64.split(';')[0].split(':')[1]
  }

  function base64Payload(imageBase64: string): string {
    return imageBase64.split(',')[1]
  }
</script>

<button class="min-h-[300px] w-full bg-surface text-secondary" on:click={() => fileInput.click()}>
  {#if imagePath && imagePath !== '/images/default.jpg'}
    <img src={imagePath} alt={fileName} />
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
