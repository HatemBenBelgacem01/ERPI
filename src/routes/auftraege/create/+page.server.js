import { createAuftrag } from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        let auftrag = {
            auftragsnummer: data.get("auftragsnummer"),
            bezeichnung: data.get("bezeichnung"),
            auftragsdatum: data.get("auftragsdatum"),
            lieferdatum: data.get("lieferdatum"),
            status: data.get("status"),
        }
        await createAuftrag(auftrag);
        throw redirect(303, '/auftraege');
    }
}