<script lang="ts">
  import Image from '$components/Icons/Image.svelte'
  import { createEventDispatcher } from 'svelte'

  export let fileName: string
  export let imagePath: string | undefined = undefined
  export let maxFileSizeInKilobytes = 1024

  let fileInput: HTMLInputElement
  let files: FileList | undefined

  const dispatch = createEventDispatcher()

  async function getBase64(image: Blob) {
    if (image.size * 0.001 > maxFileSizeInKilobytes) {
      dispatch('upload_failed')
    } else {
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
  }

  async function upload(dataUrl: string): Promise<string> {
    try {
      const payload: ImageUploadRequestPayload = {
        fileName: targetImagePath(dataUrl),
        dataBase64Encoded: base64Payload(dataUrl)
      }
      await fetch('/api/images/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
      return Promise.resolve('/api/images/' + payload.fileName)
    } catch (e: unknown) {
      console.error(e)
      return Promise.reject(e)
    }
  }

  function targetImagePath(imageBase64: string): string {
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
  {#if imagePath && imagePath !== '/images/default.jpg'}
    <img src={imagePath} alt={fileName} />
  {:else}
    <div class="flex items-center justify-center gap-4">
      <Image />
      <p class="flex flex-col">
        Bild hochladen<span class="text-xs"
          >(max. Dateigröße {Math.round(maxFileSizeInKilobytes * 0.001)} MB)</span
        >
      </p>
    </div>
  {/if}
</button>
<input
  hidden
  type="file"
  accept=".png,.jpg"
  bind:this={fileInput}
  bind:files
  on:change={() => files && files.length > 0 && getBase64(files[0])}
/>
