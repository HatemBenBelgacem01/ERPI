import { getNews } from '$lib/server/db.js';

export async function load( { params }){
        const newsListe = await getNews();
        const news = newsListe.find(n => n._id.toString() === params.id);
        return {
            news
        };
}
