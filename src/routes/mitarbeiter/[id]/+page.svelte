<script>
  export let data;

  // Destrukturierung mit Fallback auf leeres Objekt
  const { mitarbeiter = {} } = data || {};
</script>
  <div class="container">
    <div class="mb-3 form-control">
      <p>Vorname: {mitarbeiter.vorname}</p>
      <p>Nachname: {mitarbeiter.nachname}</p>
      <p>E-Mail: {mitarbeiter.email}</p>
      <p>Geburtsdatum: {mitarbeiter.geburtstag}</p>
    </div>
    
    <a href="/mitarbeiter" class="btn btn-outline-secondary"
      ><i class="bi bi-arrow-left-square"></i> Zurück</a>
  </div>

