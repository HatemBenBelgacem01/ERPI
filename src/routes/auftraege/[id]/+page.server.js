import { getAuftrag } from '$lib/server/db.js';

export async function load({ params }) {
    const auftragListe = await getAuftrag();
    const auftrag = auftragListe.find(a => a._id.toString() === params.id);
    return {
        auftrag
    };
}