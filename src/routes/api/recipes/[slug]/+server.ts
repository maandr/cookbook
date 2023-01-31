import appCtx from '$lib/server/applicationContext'
import { error, json, type RequestEvent } from '@sveltejs/kit'

export async function GET(event: RequestEvent) {
  if (!event.params.slug) throw error(400, 'Missing slug.')
  const recipe = await appCtx.recipeRepository.findBySlug(event.params.slug)
  if (recipe) return json(recipe)
  else throw error(404, 'Not Found')
}
