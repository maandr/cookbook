<script>
  import '../app.css'
</script>

<div class="min-h-screen bg-colorBackground">
  <header class="bg-colorSecondaryAccent p-8">
    <nav>
      <a href="/">
        <img src="" alt="" />
      </a>

      <ul>
        <li><a href="/proposal">Vorschlag</a></li>
        <li><a href="/recipes">Rezepte</a></li>
      </ul>
    </nav>
  </header>

  <main class="p-8"><slot /></main>
</div>

<style lang="postcss">
  nav {
    @apply text-colorBackground;
  }

  nav ul {
    @apply list-none;
    @apply flex;
  }

  nav ul li {
    @apply p-4;
    @apply text-xl;
    @apply font-handwriting;
    @apply cursor-pointer;
  }

  nav ul li:hover {
    @apply text-colorPrimaryAccent;
  }
</style>
