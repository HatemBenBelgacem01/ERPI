<script>
    import Mitarbeiter from "$lib/components/Mitarbeiter.svelte";
    let {data} = $props();
</script>



    <h3>Mitarbeiter</h3>
    <div class="mb-3">
      <a class="btn btn-success" data-bs-target="#exampleModal" href="/mitarbeiter/create"><i class="bi bi-plus-lg"></i> Mitarbeiter</a>
    </div>
    
    <table class="table">
        <thead class="table-light">
            <tr>
              <th scope="col">Vorname</th>
              <th scope="col">Nachname</th>
              <th scope="col">E-Mail</th>
              <th scope="col">Geburtsdatum</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {#each data.mitarbeiter as mitarbeiter}
            <tr>
                <td>{mitarbeiter.vorname}</td>
                <td>{mitarbeiter.nachname}</td>
                <td>{mitarbeiter.email}</td>
                <td>{mitarbeiter.geburtstag}</td>
                <td><a href="/mitarbeiter/{mitarbeiter._id}"><i class="bi bi-file-earmark-text"></i></a></td>
                <td><a href="/mitarbeiter/delete/{mitarbeiter._id}"><i class="bi bi-trash3"></i></a></td>
            </tr>
            {/each}
          </tbody>
    </table>

    <style>
      td {
        padding: 0.95rem;
        
      }
    </style>


