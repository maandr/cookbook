<script lang="ts">
  import Delete from '$components/Icons/Delete.svelte'
  import Button from '$components/Forms/Button.svelte'
  import CirclePlus from '$components/Icons/CirclePlus.svelte'
  import Input from '$components/Forms/Input.svelte'
  import { isNotBlank } from '$lib/utils/validationHelpers'

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
          <Input
            name="step"
            tabindex={tabindex ? tabindex + i + 1 : undefined}
            bind:value={step}
            isValid={isNotBlank}
          />
          <Button on:click={() => remove(i)}>
            <Delete width={22} height={22} />
          </Button>
        </div>
      </li>
    {/each}
  </ol>
  <button
    on:click={add}
    tabindex={tabindex ? tabindex + entries.length * 4 + 1 : undefined}
    class="my-2 flex w-full items-center gap-4 p-3 text-lg text-gray-600"
  >
    <CirclePlus /> Schritt hinzufügen
  </button>
</div>
