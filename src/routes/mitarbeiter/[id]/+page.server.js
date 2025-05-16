import { getMitarbeiter, deleteMitarbeiter } from '$lib/server/db.js';
import { json } from '@sveltejs/kit';

export async function load({ params }) {
    const mitarbeiterListe = await getMitarbeiter();
    const mitarbeiter = mitarbeiterListe.find(m => m._id.toString() === params.id);
    return {
        mitarbeiter  // Wichtig: als props zurückgeben
    };
}

export const actions = {
    delete: async ({ request }) => {
      const data = await request.formData();
      const id = data.get("id");
      console.log("Delete ID:", id);
      await deleteMitarbeiter(id);
    }
  };
