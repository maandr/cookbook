<script lang="ts">
  import IsValid from '$components/Forms/IsValid.svelte'
  import { isOk } from '$lib/utils/recipeHelpers'

  export let json: string
  export let onChange: (json: string) => void

  let lastValidValue = json
</script>

<div class="relative">
  <div class="absolute top-7 right-7">
    <IsValid bind:value={json} isValid={isOk} />
  </div>
  <textarea
    class="h-[400px] w-full break-all bg-white p-5 font-mono outline-none md:h-[768px]"
    bind:value={json}
    on:change={() => {
      lastValidValue = isOk(json) ? json : lastValidValue
      onChange(lastValidValue)
    }}
  />
</div>
