// src/routes/auftraege/[id]/+page.server.js
import { updateAuftrag, getAuftrag } from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    const auftragListe = await getAuftrag();
    const auftrag = auftragListe.find(a => a._id.toString() === params.id);
    return {
        auftrag
    };
}

export const actions = {
    update: async ({ request, params }) => {
        const data = await request.formData();
        const id = params.id;
        
        const updateData = {
            auftragsnummer: data.get('auftragsnummer'),
            bezeichnung: data.get('bezeichnung'),
       
            status: data.get('status')
        };
        
        await updateAuftrag(id, updateData);
        throw redirect(303, '/auftraege');
    }
};