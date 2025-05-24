<script>
    import Auftraege from "$lib/components/Auftraege.svelte";
    let { data } = $props();
    const daten = data.auftrag;

    let statusFilter = $state("");
    let liste = $state([...daten]);

    function sucheAuftrag() {
        if (statusFilter === "") {
            liste = [...daten];
        } else {
            liste = daten.filter((filter) => filter.status === statusFilter);
        }
    }
</script>
<div class="container">
    <h3>Aufträge</h3>
    <hr>

<div class="mb-3">
    <a href="/auftraege/create" class="btn btn-success"
        ><i class="bi bi-plus-lg mb-3"></i>Auftrag</a
    >
</div>
<div class="row">
    <div class="">
        <label class=""><i class="bi bi-funnel"></i> Status</label>
    </div>
    <div class="col-3">
        <select class="form-select" bind:value={statusFilter}>
            <option selected value="">alle</option>
            <option value="offen">offen</option>
            <option value="warten">warten</option>
            <option value="abgeschlossen">abgeschlossen</option>
        </select>
    </div>
    <div class="col mb-3">
        <button class="btn btn-success" onclick={sucheAuftrag}>suchen</button>
    </div>
</div>

<div class="row justify-content-start">
    {#each liste as auftrag}
        <div class="col">
            <Auftraege
                auftragsnummer={auftrag.auftragsnummer}
                bezeichnung={auftrag.bezeichnung}
                auftragsdatum={auftrag.auftragsdatum}
                lieferdatum={auftrag.lieferdatum}
                status={auftrag.status}
                details={`/auftraege/${auftrag._id}`}
                update={`/auftraege/update/${auftrag._id}`}
            />
        </div>
    {/each}
</div>
</div>

