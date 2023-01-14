import { RecipeRepository } from '$lib/RecipeRepository'

export function load(): { recipes: Recipe[] } {
  const recipes = RecipeRepository.findAll()
  return { recipes: Object.values(recipes) }
}
