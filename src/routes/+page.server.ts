import { couldNotLoadData } from '$lib/errors'
import appCtx from '$lib/server/applicationContext'

export async function load(): Promise<Result<Recipe[]>> {
  try {
    return { payload: await appCtx.recipeRepository.findAll() }
  } catch (e: unknown) {
    throw couldNotLoadData()
  }
}
