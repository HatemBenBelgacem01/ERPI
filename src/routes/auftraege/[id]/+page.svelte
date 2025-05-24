<script>
    
    import Auftraege from "$lib/components/Auftraege.svelte";
    export let data;
    const {auftrag = {} } = data || {};
</script>
    <div class="form-control mb-3">
    <p>Auftrags-Nr: {auftrag.auftragsnummer }</p>
    <p>Bezeichnung: {auftrag.bezeichnung}</p>
    <p>Auftragsdatum: {auftrag.auftragsdatum}</p>
    <p>Lieferdatum: {auftrag.lieferdatum}</p>
    <p>Status: {auftrag.status}</p>
    </div>
    

    <a href="/auftraege" style="text-decoration: none;" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left-square"></i> Zurück</a>
    
    
    


