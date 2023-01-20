<script lang="ts">
  import IsValid from '$components/Forms/IsValid.svelte'
  import TextAreaAutosize from '$components/Forms/TextAreaAutosize.svelte'
  import { isOk } from '$lib/utils/recipeHelpers'

  export let json: string
  export let onChange: (json: string) => void

  let lastValidValue = json
</script>

<div class="relative font-mono">
  <div class="absolute top-7 right-7">
    <IsValid bind:value={json} isValid={isOk} />
  </div>
  <TextAreaAutosize
    isValid={isOk}
    bind:value={json}
    on:change={() => {
      lastValidValue = isOk(json) ? json : lastValidValue // prevents breaking the state
      onChange(lastValidValue)
    }}
  />
</div>
