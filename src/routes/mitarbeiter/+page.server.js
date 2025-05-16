import {getMitarbeiter} from '$lib/server/db.js';

export async function load(){
    return {
        mitarbeiter: await getMitarbeiter()
    }
}