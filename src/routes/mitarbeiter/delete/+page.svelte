<script>
  export let data;
  
  // Destrukturierung mit Fallback auf leeres Objekt
  const { mitarbeiter = {} } = data || {};
</script>

<h3>Mitarbeiter</h3>


{#if Object.keys(mitarbeiter).length === 0}
  <p>Mitarbeiter nicht gefunden oder Daten werden geladen...</p>
{:else}
  <h1>{mitarbeiter.vorname} {mitarbeiter.nachname}</h1>
{/if}

<a href="/mitarbeiter">Back</a>