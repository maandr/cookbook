import appCtx from '$lib/server/appCtx'
import { json } from '@sveltejs/kit'

export async function GET() {
  const { recipeRepository } = await appCtx()
  const recipes = await recipeRepository.findAll()
  return json(recipes)
}
