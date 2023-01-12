import { RecipeRepository } from '$lib/RecipeRepository'
import type { Recipe } from '$types/Recipe'

export function load(): Recipe {
  return RecipeRepository.findOneThatSuites({})
}
