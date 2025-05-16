import {getAuftrag} from '$lib/server/db.js';

export async function load(){
    return {
        auftrag: await getAuftrag()
    }
}