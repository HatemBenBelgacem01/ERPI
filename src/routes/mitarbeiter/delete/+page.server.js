// src/routes/mitarbeiter/delete/[id]/+server.js
import { deleteMitarbeiter } from "$lib/server/db.js";
import { redirect } from '@sveltejs/kit';

export async function GET({ params }) {
  await deleteMitarbeiter(params.id);
  throw redirect(303, "/mitarbeiter");
}
