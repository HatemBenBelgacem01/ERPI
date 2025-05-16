<script>
    export let titel;
    export let einleitung = "Hier steht eine Einleitung aber nicht der ganze Artikel. Dieser findet Ihr, wenn ich auf den Button klickt"
    export let text;
    export let img;
</script>

<div class="card mb-3 shadow" style="">
    <div class="row g-0 h-100">
      <div class="col-md-4">
        <img src="{img}" class="img-fluid rounded-start" alt="..." style="height: 15rem; width:25rem; object-fit: cover;">
      </div>
      <div class="col-md-8">
        <div class="card-body p-3 d-flex flex-column justify-content-end h-100">
          <h6><span class="badge text-bg-secondary">New</span></h6>
          <h2 class="card-title">{titel}</h2>
          <p class="card-text">{einleitung}</p>
        </div>
      </div>
    </div>
  </div>