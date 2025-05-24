<script>
    import News from '$lib/components/News.svelte';
    let {data} = $props();
</script>

<div class="container">
    <h1>News</h1>
    <hr>
    {#each data.news as news}
    <a href="/news/{news._id}" style="text-decoration: none; color: inherit;">
        <News 
        titel={news.titel}
        einleitung={news.einleitung}
        img={news.img}
        />
    </a>
   
{/each}
</div>
