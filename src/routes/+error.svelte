<script>
  import {page} from '$app/stores';
  
  const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
  let message = offline ? 'Find the internet and try again' : $page.error?.message;
  let title = offline ? 'Offline' : $page.status;

  if ($page.status === 404) {
    message = 'Sorry! If you think this URL is broken please let us know'
    title = 'Page not found';
  }
  console.log($page)
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section>
  <h1>{$page.status}: {title}</h1>
  {#if $page.status === 404}
    <p>There is no page at the slug <code>{$page.url.pathname}</code></p>
  {:else}
    <p>{message}</p>
  {/if}
</section>
