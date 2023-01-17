<script lang="ts">
  import Button from '$components/Forms/Button.svelte'
  import Export from '$components/Icons/Export.svelte'
  import Import from '$components/Icons/Import.svelte'

  export let json: string
  export let onCopy: VoidFunction
  export let onPaste: VoidFunction
</script>

<div class="border-">
  <textarea class="h-[400px] w-full break-all bg-white p-5 font-mono outline-none md:h-[768px]"
    >{json}</textarea
  >
  <div class="my-6 flex w-full items-center justify-end gap-4">
    <Button onClick={onCopy}>
      <Export /> Copy
    </Button>
    <Button onClick={onPaste}>
      <Import /> Paste
    </Button>
  </div>
</div>
