import type { Ingredience } from './ingredience'

export interface Recipe {
  slug: string
  title: string
  amountOfServings: number
  isVegan: boolean
  isVegetarian: boolean
  isGlutenFree: boolean
  ingrediences: Ingredience[]
  instructions: string[]
}
