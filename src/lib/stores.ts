import { derived, writable } from 'svelte/store'

export const recipes = writable<Recipe[]>([])
export const filter = writable<RecipeFilter>({
  mustContainIngrediences: [],
  meatAllowed: true,
  glutenAllowed: true,
  lactoseAllowed: true,
  fishAllowed: true
})
export const recipesBySlug = derived(recipes, (recipes) =>
  Object.fromEntries(recipes.map((recipe) => [recipe.slug, recipe]))
)
export const filtered = derived([recipes, filter], ([recipes, filter]) =>
  applyFilter(recipes, filter)
)

function applyFilter(recipes: Recipe[], filter: RecipeFilter): Recipe[] {
  return recipes
    .filter((recipe) => (!filter.meatAllowed ? !recipe.containsMeat : true))
    .filter((recipe) => (!filter.glutenAllowed ? !recipe.containsGluten : true))
    .filter((recipe) => (!filter.lactoseAllowed ? !recipe.containsLactose : true))
    .filter((recipe) => (!filter.fishAllowed ? !recipe.containsFish : true))
    .filter((recipe) =>
      filter.mustContainIngrediences.length == 0
        ? true
        : filter.mustContainIngrediences.every((x) =>
            recipe.ingrediences
              .map((i) => i.name.toLocaleLowerCase())
              .join('')
              .includes(x.toLocaleLowerCase())
          )
    )
}
