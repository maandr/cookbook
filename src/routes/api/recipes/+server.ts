import { loadRecipes } from '$lib/server/recipes'
import { json } from '@sveltejs/kit'

export async function GET() {
  return json(loadRecipes())
}
