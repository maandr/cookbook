import appCtx from '$lib/server/appCtx'
import type { RequestEvent } from '@sveltejs/kit'

export async function POST(event: RequestEvent) {
  try {
    const recipe: Recipe = await event.request.json()
    const { recipeRepository } = await appCtx()
    await recipeRepository.save(recipe)
    return new Response(null, {
      status: 201
    })
  } catch (e: unknown) {
    console.error('failed to save recipe.', e)
    return new Response(null, {
      status: 500
    })
  }
}
