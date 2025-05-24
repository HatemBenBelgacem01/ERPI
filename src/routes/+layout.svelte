<script>
    let { children } = $props();
 
  import { page } from '$app/stores';
  </script>
  
  {#if $page.url.pathname !== "/"}
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="/page" href="/"><img src="/erpi_logo.png" alt="" style="height: 3rem;"></a>
          </li>
          <li class="nav-item" style="padding-top:16px;">
            <a class="nav-link" href="/mitarbeiter">Mitarbeiter</a>
          </li>
          <li class="nav-item" style="padding-top:16px;">
            <a class="nav-link" href="/auftraege">Aufträge</a>
          </li>
          <li class="nav-item" style="padding-top:16px;">
            <a class="nav-link" href="/news">News</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/if}
  <div class="container-fluid m-0 p-0">
    {@render children()}
  </div>