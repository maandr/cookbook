import type { Ingredience } from '$types/Ingredience'

export interface Recipe {
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
