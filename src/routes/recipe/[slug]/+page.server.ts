import { error } from '@sveltejs/kit'
import type { Recipe } from '$types/recipe'
import { RecipeRepository } from '$lib/RecipeRepository'

export function load({ params }): Recipe {
  if (params.slug) {
    return RecipeRepository.findOne(params.slug)
  }
  throw error(404, 'Not Found')
}
