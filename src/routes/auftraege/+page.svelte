<script>
    import Auftraege from "$lib/components/Auftraege.svelte";
    let {data} = $props();

    let filter = '';

    
</script>

<h3>Aufträge</h3>

<div class="mb-3" >
    <a href="/auftraege/create" class="btn btn-success"><i class="bi bi-plus-lg"></i>Auftrag</a>
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