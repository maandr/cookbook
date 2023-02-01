import appCtx from '$lib/server/appCtx'
import type { RequestEvent } from '@sveltejs/kit'

export const actions = {
  save: async (event: RequestEvent) => {
    try {
      const data = await event.request.formData()
      const recipe = JSON.parse(data.get('recipe') as string)
      const { recipeRepository } = await appCtx()
      await recipeRepository.save(recipe)
    } catch (e: unknown) {
      console.error(`failed to parse recipe.\n`, e)
    }
  }
}
