import { couldNotLoadData, recipeDoesNotExist } from '$lib/errors'
import appCtx from '$lib/server/appCtx'
import type { RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent): Promise<Result<Recipe>> {
  if (!event.params.id) throw recipeDoesNotExist()
  let recipe: Recipe | null
  try {
    const { recipeRepository } = await appCtx()
    recipe = await recipeRepository.findById(event.params.id)
  } catch (e: unknown) {
    throw couldNotLoadData()
  }
  if (!recipe) throw recipeDoesNotExist()
  return { payload: recipe }
}
