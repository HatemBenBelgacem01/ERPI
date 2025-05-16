import { createMitarbeiter } from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();
        let mitarbeiter = {
            vorname: data.get("vorname"),
            nachname: data.get("nachname"),
            email: data.get("email"),
            geburtstag: data.get("geburtstag"),
        }
        await createMitarbeiter(mitarbeiter);
        throw redirect(303, '/mitarbeiter');
    }
}