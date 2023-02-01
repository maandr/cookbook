import { derived, writable } from 'svelte/store'
import { DEFAULT_FILTER } from './constants'
import { containsAll, containsAllSubstrings } from './utils/arrayHelpers'

export const isLoading = writable<boolean>(true)
export const recipes = writable<Recipe[]>([])
export const filter = writable<RecipeFilter>({ ...DEFAULT_FILTER })
export const filtered = derived([recipes, filter], ([recipes, filter]) =>
  applyFilter(recipes, filter)
)

function applyFilter(recipes: Recipe[], filter: RecipeFilter): Recipe[] {
  return recipes
    .filter((recipe) => (!filter.meatAllowed ? !recipe.containsMeat : true))
    .filter((recipe) => (!filter.glutenAllowed ? !recipe.containsGluten : true))
    .filter((recipe) => (!filter.lactoseAllowed ? !recipe.containsLactose : true))
    .filter((recipe) => (!filter.fishAllowed ? !recipe.containsFish : true))
    .filter((recipe) => (!filter.alcoholAllowed ? !recipe.containsAlcohol : true))
    .filter((recipe) => containsAll(recipe.tags, filter.mustHaveTags))
    .filter((recipe) =>
      containsAllSubstrings(
        recipe.ingrediences.map((i) => i.name),
        filter.mustContainIngrediences
      )
    )
}
