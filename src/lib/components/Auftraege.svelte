<script>
  export let auftragsnummer;
  export let bezeichnung;
  export let auftragsdatum;
  export let lieferdatum;
  export let status;
  export let details;
  export let update;
  export let badge;
</script>

<div class="card mb-1 shadow mb-4" style="min-width: 16rem; height: 16rem;">
  <div class="card-body">
    <h3 class="card-title">{auftragsnummer}</h3>
    <h6 class="card-subtitle mb-2 text-body-secondary">{bezeichnung}</h6>
    <p>
      <i class="bi bi-clipboard-check"></i>
      {auftragsdatum} <i class="bi bi-truck"></i>
      {lieferdatum}
    </p>
    <span class="badge text-bg-primary mb-3">{status}</span>
    <div class="">
      <a href={details} class="btn btn-secondary btn-sm">Details</a>
      <a href={update} class="btn btn-secondary btn-sm">Bearbeiten</a>
    </div>
  </div>
</div>
