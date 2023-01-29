<script lang="ts">
  import Clock from '../Icons/Clock.svelte'

  export let recipe: Recipe

  $: textColor =
    recipe.amountOfMinutesRequired > 30
      ? recipe.amountOfMinutesRequired > 60
        ? 'text-attention'
        : 'text-warning'
      : 'text-success'
</script>

<div class="rounded bg-primaryAccent px-2 py-1 {textColor} flex items-center gap-2">
  <Clock width={16} height={16} />
  {recipe.amountOfMinutesRequired} Minuten
</div>
