import appCtx from '$lib/server/applicationContext'
import { json } from '@sveltejs/kit'

export async function GET() {
  const recipes = await appCtx.recipeRepository.findAll()
  return json(recipes)
}
