<script lang="ts">
  import Delete from '$components/Icons/Delete.svelte'
  import Button from '$components/Forms/Button.svelte'
  import TextInput from '$components/Forms/TextInput.svelte'

  export let entries: string[]
  export let tabindex: number | undefined = undefined

  function add() {
    entries = [...entries, '']
  }

  function remove(atIndex: number) {
    entries = entries.filter((e, i) => i !== atIndex)
  }
</script>

<div class="my-4">
  <ol class="mb-2 list-outside list-decimal pl-6">
    {#each entries as step, i}
      <li class="my-2 pl-3">
        <div class="grid grid-cols-crafterInstructions gap-2">
          <TextInput
            name="step"
            bind:value={step}
            tabindex={tabindex ? tabindex + i + 1 : undefined}
          />
          <Button onClick={() => remove(i)}>
            <Delete width={22} height={22} />
          </Button>
        </div>
      </li>
    {/each}
  </ol>
  <Button onClick={add} tabindex={tabindex ? tabindex + entries.length + 1 : undefined}>...</Button>
</div>
