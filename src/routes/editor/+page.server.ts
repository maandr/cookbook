import { saveRecipe } from '$lib/server/recipes'
import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').Actions} */
export const actions = {
  save: async (event: RequestEvent) => {
    try {
      const data = await event.request.formData()
      const recipe = JSON.parse(data.get('recipe') as string)
      saveRecipe(recipe)
    } catch (e) {
      console.error(`failed to parse recipe.\n`, e)
    }
  }
}
