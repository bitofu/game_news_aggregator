<script>
  // import '$lib/css/reset.css';
  import '$lib/css/global.css';
  import Header from '$lib/components/Header.svelte';
</script>

<div class="wrapper">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
  .wrapper {
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>
