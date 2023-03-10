import { CATEGORIES } from '$lib/constants'

export function isOk(json: string) {
  try {
    const recipe = JSON.parse(json)
    return (
      typeof recipe.title == 'string' &&
      typeof recipe.id == 'string' &&
      Array.isArray(recipe.tags) &&
      (!recipe.amountOfServings || !isNaN(recipe.amountOfServings)) &&
      (!recipe.amountOfMinutesRequired || !isNaN(recipe.amountOfMinutesRequired)) &&
      typeof recipe.containsMeat == 'boolean' &&
      typeof recipe.containsMeat == 'boolean' &&
      typeof recipe.containsGluten == 'boolean' &&
      typeof recipe.containsLactose == 'boolean' &&
      typeof recipe.containsAlcohol == 'boolean' &&
      Array.isArray(recipe.ingrediences) &&
      Array.isArray(recipe.instructions)
    )
  } catch (e) {
    return false
  }
}

export function getCategory(tags: string[]) {
  return tags.filter((tag) => CATEGORIES.includes(tag))[0]
}
