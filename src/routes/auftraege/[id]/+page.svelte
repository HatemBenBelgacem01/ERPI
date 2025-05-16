<script>
    
    import Auftraege from "$lib/components/Auftraege.svelte";
    export let data;
    const {auftrag = {} } = data || {};
</script>

    <h1>Auftrags-Nr: {auftrag.auftragsnummer }</h1>
    <h5>Bezeichnung: {auftrag.bezeichnung}</h5>
    <h5>Auftragsdatum: {auftrag.auftragsdatum}</h5>
    <h5>Lieferdatum: {auftrag.lieferdatum}</h5>
    <h5>Status: {auftrag.status}</h5>

    <a href="/auftraege" style="text-decoration: none;" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left-square"></i> Zurück</a>
    
    
    


