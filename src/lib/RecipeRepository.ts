import type { Recipe } from '$types/Recipe'
import fs, { Dirent } from 'fs'
import { error } from '@sveltejs/kit'
import type { Ingredience } from '$types/Ingredience'

export type RecipeDictionary = {
  [id: string]: Recipe
}

export type RecipeFilter = {
  mustContainIngrediences?: Ingredience[]
  mustBeVegetarian?: boolean
  mustBeVegan?: boolean
  musteBeGlutenFree?: boolean
}
const RECIPES_FOLDER = './static/recipes/'
const IMAGES_FOLDER = '/images/'
const RECIPES: RecipeDictionary = loadRecipies()

export abstract class RecipeRepository {
  public static findOne(slug: string): Recipe {
    if (RECIPES[slug]) return RECIPES[slug]
    else throw error(404, 'Not Found')
  }

  public static findAll(): RecipeDictionary {
    return RECIPES
  }

  public static findAllThatSuite(filter: RecipeFilter): Recipe[] {
    return Object.values(RECIPES)
      .filter((recipe: Recipe) => (filter.mustBeVegetarian ? recipe.isVegetarian : true))
      .filter((recipe: Recipe) => (filter.mustBeVegan ? recipe.isVegan : true))
      .filter((recipe: Recipe) => (filter.musteBeGlutenFree ? recipe.isGlutenFree : true))
      .filter((recipe: Recipe) =>
        filter.mustContainIngrediences
          ? filter.mustContainIngrediences
              .map((i) => i.name)
              .every((x) => recipe.ingrediences.map((i) => i.name).includes(x)) // must contain all desired ingrediences
          : true
      )
  }

  public static findOneThatSuites(filter: RecipeFilter): Recipe {
    const candidates = RecipeRepository.findAllThatSuite(filter)
    if (candidates.length === 0) throw error(404, 'Not Found')
    return candidates[Math.floor(Math.random() * candidates.length)] // pick random
  }
}

function loadRecipies(): RecipeDictionary {
  const files = readAllRecipeFiles()
  console.log(`found ${files.length} recipe(s) files.`)
  const recipes = files.map((file) => parseRecipe(file))
  console.log(`successfully parsed ${recipes.length} recipe(s).`)
  return transformArrayToDictionary(recipes)
}

function readAllRecipeFiles(predicate: (file: Dirent) => boolean = () => true): Dirent[] {
  return fs
    .readdirSync(RECIPES_FOLDER, { withFileTypes: true, encoding: 'utf-8' })
    .filter((file) => file.isFile())
    .filter((file) => predicate(file))
}

function parseRecipe(file: Dirent): Recipe {
  return {
    ...JSON.parse(fs.readFileSync(RECIPES_FOLDER + file.name, 'utf-8')),
    imagePath: getImagePath(file)
  }
}

function getImagePath(file: Dirent): string {
  const imagePath = ['jpg', 'jpeg', 'png']
    .map((fileExtension) => file.name.split('.')[0] + '.' + fileExtension)
    .filter((fileName) => fs.existsSync('./static/' + IMAGES_FOLDER + fileName)) // check if file exists
    .map((fileName) => IMAGES_FOLDER + fileName)[0]

  return imagePath ? imagePath : IMAGES_FOLDER + 'default.jpg'
}

function transformArrayToDictionary(recipes: Recipe[]): RecipeDictionary {
  return Object.fromEntries(recipes.map((x) => [x.slug, x]))
}
