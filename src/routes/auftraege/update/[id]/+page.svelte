<script>
    
    import Auftraege from "$lib/components/Auftraege.svelte";
    export let data;
    const {auftrag = {} } = data || {};
</script>
    
    <form action="?/update" method="POST">
        <div class="mb-3">
            <label for="auftragsnummer" class="form-label">Auftragsnummer</label>
            <input type="text" class="form-control" name="auftragsnummer" value={auftrag.auftragsnummer} />
        </div>
        <div class="mb-3">
            <label for="bezeichnung" class="form-label">Bezeichnung</label>
            <input type="text" class="form-control" name="bezeichnung" value={auftrag.bezeichnung} />
        </div>
        <div class="mb-3">
            <label for="auftragsdatum" class="form-label">Auftragsdatum</label>
            <input type="date" class="form-control" name="auftragsdatum" value={auftrag.auftragsdatum} />
        </div>
        <div>
            <label for="lieferdatum" class="form-label">Lieferdatum</label>
            <input type="date" class="form-control" name="lieferdatum" value={auftrag.lieferdatum} />
        </div>
        <div>
            <label for="status" class="form-label">Status</label>
            <select class="form-select" name="status">
                <option value="offen" selected={auftrag.status === 'offen'}>offen</option>
                <option value="warten" selected={auftrag.status === 'warten'}>warten</option>
                <option value="abgeschlossen" selected={auftrag.status === 'abgeschlossen'}>abgeschlossen</option>
            </select>
        </div>

        <button type="submit" class="btn btn-success mt-3 mb-3">Speichern</button>
    </form>
    
    <a href="/auftraege"><i class="bi bi-arrow-left-square"></i></a>
    


