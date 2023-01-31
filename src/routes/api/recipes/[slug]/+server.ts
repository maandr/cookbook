import { loadRecipes } from '$lib/server/recipes'
import { error, json, type RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').RequestHandler} */
export async function GET(event: RequestEvent) {
  if (!event.params.slug) throw error(400, 'Missing slug.')
  const matches = loadRecipes().filter(
    (recipe) => recipe.slug === event.params.slug?.toLocaleLowerCase()
  )
  if (matches.length !== 1) throw error(404, 'Not Found')
  return json(matches[0])
}
