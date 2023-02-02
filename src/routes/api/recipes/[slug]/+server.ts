import appCtx from '$lib/server/appCtx'
import { error, json, type RequestEvent } from '@sveltejs/kit'

export async function GET(event: RequestEvent) {
  if (!event.params.id) throw error(400, 'Missing id.')
  const { recipeRepository } = await appCtx()
  const recipe = recipeRepository.findById(event.params.id)
  if (recipe) return json(recipe)
  else throw error(404, 'Not Found')
}
