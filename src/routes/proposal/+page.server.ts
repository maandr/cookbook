import { RecipeRepository } from '$lib/RecipeRepository'

export function load(): Recipe {
  return RecipeRepository.findOneThatSuites({})
}
