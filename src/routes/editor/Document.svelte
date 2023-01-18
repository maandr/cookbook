<script lang="ts">
  export let json: string
  export let onChange: (json: string) => void
</script>

<div class="border-">
  <textarea
    class="h-[400px] w-full break-all bg-white p-5 font-mono outline-none md:h-[768px]"
    bind:value={json}
    on:change={() => onChange(json)}
  />
</div>
