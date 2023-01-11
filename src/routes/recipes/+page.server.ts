import { RecipeRepository } from '$lib/RecipeRepository'
import type { Recipe } from '$types/recipe'

export function load(): { recipes: Recipe[] } {
  const recipes = RecipeRepository.findAll()
  return { recipes: Object.values(recipes) }
}
