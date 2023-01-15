interface Recipe {
  slug: string
  title: string
  tags: string[]
  imagePath: string
  amountOfServings: number
  amountOfMinutesRequired: number
  containsGluten: boolean
  containsMeat: boolean
  containsLactose: boolean
  containsFish: boolean
  containsAlcohol: boolean
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
  isActive: boolean
  title: string
  href: string
  onClick?: () => Void
}

interface RecipeFilter {
  mustContainIngrediences: string[]
  mustHaveTags: string[]
  meatAllowed: boolean
  glutenAllowed: boolean
  lactoseAllowed: boolean
  fishAllowed: boolean
  alcoholAllowed: boolean
}

type Pair<T> = {
  key: T
  value: T
}
