import { RecipeRepository } from '$lib/RecipeRepository'
import type { Recipe } from '$types/recipe'

export function load(): Recipe {
  return RecipeRepository.findOneThatSuites({})
}
