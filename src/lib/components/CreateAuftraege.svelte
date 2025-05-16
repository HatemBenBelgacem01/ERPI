<script>
    export let status;
    export let badge;
    

    if(status === "offen"){
        badge = "success";
    } else if(status === "warten"){
        badge = "warning"
    } else if(status === "abgeschlossen"){
        badge = "danger"
    }
</script>


<div>
    <form action="?/create" method="POST" use:enhance>
        <div class="mb-3">
            <label for="">Auftragsnummer</label>
            <input class="form-control" type="text" name="auftragsnummer">
        </div>
        <div class="mb-3">
            <label for="">Bezeichnung</label>
            <input type="text" class="form-control" name="bezeichnung">
        </div>
        <div class="mb-3">
            <label for="">Auftragsdatum</label>
            <input type="date" class="form-control" name="auftragsdatum">
        </div>
        <div class="mb-3">
            <label for="">Lieferdatum</label>
            <input type="date" class="form-control" name="lieferdatum">
        </div>
        <div class="mb-3">
            <label for="">Status</label>
            <select class="form-control" name="status">
                <option value="offen">offen</option>
                <option value="warten">warten</option>
                <option value="abgeschlossen">abgeschlossen</option>
            </select>
        </div>
        <button type="submit" class="btn btn-success">Speichern</button>
    </form>
</div>

