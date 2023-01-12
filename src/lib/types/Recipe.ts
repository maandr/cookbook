import type { Ingredience } from '$types/Ingredience'

export interface Recipe {
  slug: string
  title: string
  imagePath: string
  amountOfServings: number
  isVegan: boolean
  isVegetarian: boolean
  isGlutenFree: boolean
  ingrediences: Ingredience[]
  instructions: string[]
}
