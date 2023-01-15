import { loadRecipes } from '$lib/server/recipes'

export function load() {
  return { recipes: loadRecipes() }
}
