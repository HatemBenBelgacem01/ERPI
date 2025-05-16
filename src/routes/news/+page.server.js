import {getNews} from '$lib/server/db.js';

export async function load(){
    return {
        news: await getNews()
    }
}