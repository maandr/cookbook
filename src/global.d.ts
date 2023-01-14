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
  containsOnlyPlants: boolean
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

interface MenuEntry {
  title: string
  href: string
}
