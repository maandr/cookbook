<script lang="ts">
  import Navigation from '$components/Navigation.svelte'
  import '../app.css'
</script>

<div class="grid min-h-screen grid-cols-12 gap-4 bg-colorBackground">
  <Navigation
    entries={[
      { title: 'Vorschlag', href: '/proposal' },
      { title: 'Rezepte', href: '/recipes' }
    ]}
  />
  <main class="col-span-12 p-8 md:col-span-9"><slot /></main>
</div>
