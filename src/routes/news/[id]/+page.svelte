<script>
    
    import News from '$lib/components/News.svelte';
    
    export let data;
    const {news = {} } = data || {};
</script>


    <div style="width: 40rem; margin: auto; padding: 2rem;">
        <h1 style="margin-bottom: 3rem;">{news.titel}</h1>
        <h5 style="font-weight: bold;">{news.einleitung}</h5>
        <p style="line-height: 2;">{news.text}</p>
        <a href="/news" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left-square"></i> Zurück</a>
    </div>


    


