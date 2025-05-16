<script>
  export let data;
  
  // Destrukturierung mit Fallback auf leeres Objekt
  const { mitarbeiter = {} } = data || {};
</script>

<p>Vorname: {mitarbeiter.vorname}</p>
<p>Nachname: {mitarbeiter.nachname}</p>
<p>E-Mail: {mitarbeiter.email}</p>
<p>Geburtsdatum: {mitarbeiter.geburtstag}</p>

<form class="mb-3" action="?/delete" method="POST">
  <input type="hidden" name="id" value="{mitarbeiter._id}">
  <button class="btn btn-danger" type="submit">Löschen</button>
</form>

<a href="/mitarbeiter" class="btn btn-outline-secondary"><i class="bi bi-arrow-left-square"></i> Zurück</a>