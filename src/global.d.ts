interface Recipe {
  slug: string
  title: string
  imagePath: string
  amountOfServings: number
  amountOfMinutesRequired: number
  containsGluten: boolean
  containsMeat: boolean
  containsLactose: boolean
  containsFish: boolean
  ingrediences: Ingredience[]
  instructions: string[]
}

interface Ingredience {
  quantity?: {
    amount: number
    unit: string
  }
  name: string
  required: boolean
}

type RecipeDictionary = {
  [id: string]: Recipe
}

interface MenuEntry {
  title: string
  href: string
}

interface RecipeFilter {
  mustContainIngrediences: string[]
  meatAllowed: boolean
  glutenAllowed: boolean
  lactoseAllowed: boolean
  fishAllowed: boolean
}

type Pair<T> = {
  key: T
  value: T
}
