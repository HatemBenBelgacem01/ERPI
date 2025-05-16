<script>
  import { enhance } from "$app/forms";
  
</script>


<form method="POST" action="?/create" use:enhance>
  <div class="mb-3">
    <label for="">Vorname</label>
    <input class="form-control" type="text" name="vorname" id="vorname" placeholder="Vorname" required>
  </div>
  <div class="mb-3">
    <label for="">Nachname</label>
    <input class="form-control" type="text" name="nachname" id="nachname" placeholder="Nachname" required>
  </div>
  <div class="mb-3">
    <label for="">E-Mail</label>
    <input class="form-control" type="email" name="email" id="email" placeholder="E-Mail" required>
  </div>
  <div class="mb-3">
    <label for="">Geburtsdatum</label>
    <input class="form-control" type="date" name="geburtstag" id="geburtstag" placeholder="Geburtsdatum" required>
  </div>
  <button type="submit" class="btn btn-success">Speichern</button>
</form>

      