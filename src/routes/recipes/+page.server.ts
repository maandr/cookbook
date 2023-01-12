import { RecipeRepository } from '$lib/RecipeRepository'
import type { Recipe } from '$types/Recipe'

export function load(): { recipes: Recipe[] } {
  const recipes = RecipeRepository.findAll()
  return { recipes: Object.values(recipes) }
}
