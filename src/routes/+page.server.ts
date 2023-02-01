import { couldNotLoadData } from '$lib/errors'
import appCtx from '$lib/server/appCtx'

export async function load(): Promise<Result<Recipe[]>> {
  try {
    const { recipeRepository } = await appCtx()
    return { payload: await recipeRepository.findAll() }
  } catch (e: unknown) {
    throw couldNotLoadData()
  }
}
