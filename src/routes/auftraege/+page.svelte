<script>
    import Auftraege from "$lib/components/Auftraege.svelte";
    let {data} = $props();
</script>

<h3>Aufträge</h3>

<div class="mb-3" >
    <a href="/auftraege/create" class="btn btn-success"><i class="bi bi-plus-lg"></i>Auftrag</a>
</div>    

<div class="col-3 mb-3">
    <select class="form-select mb-3 col-6" id="">
        <option value="">Alle</option>
        <option value="offen">Offen</option>
        <option value="warten">In Bearbeitung</option>
        <option value="abgeschlossen">Abgeschlossen</option>
    </select>
</div>

<div class="row">
    
{#each data.auftrag as auftrag}
    <div class="col m-1">
        <Auftraege 
        auftragsnummer={auftrag.auftragsnummer } 
        bezeichnung={auftrag.bezeichnung} 
        auftragsdatum={auftrag.auftragsdatum}
        lieferdatum={auftrag.lieferdatum}
        status={auftrag.status}
        details="/auftraege/{auftrag._id}"
        update="/auftraege/update/{auftrag._id}"
        />
    </div>
{/each}
</div>