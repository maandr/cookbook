import { couldNotLoadData, recipeDoesNotExist } from '$lib/errors'
import appCtx from '$lib/server/applicationContext'
import type { RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent): Promise<Result<Recipe>> {
  if (!event.params.slug) throw recipeDoesNotExist()
  let recipe: Recipe | null
  try {
    recipe = await appCtx.recipeRepository.findBySlug(event.params.slug)
  } catch (e: unknown) {
    throw couldNotLoadData()
  }
  if (!recipe) throw recipeDoesNotExist()
  return { payload: recipe }
}
