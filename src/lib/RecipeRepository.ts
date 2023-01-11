import type { Recipe } from 'src/types/recipe'
import fs, { Dirent } from 'fs'
import { error } from '@sveltejs/kit'

export type RecipeDictionary = {
  [id: string]: Recipe
}

const RECIPES_FOLDER = './static/recipes/'
const RECIPES: RecipeDictionary = loadRecipies()

export abstract class RecipeRepository {
  public static findOne(slug: string): Recipe {
    if (RECIPES[slug]) return RECIPES[slug]
    else throw error(404, 'Not Found')
  }

  public static findAll(): RecipeDictionary {
    return RECIPES
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
  return JSON.parse(fs.readFileSync(RECIPES_FOLDER + file.name, 'utf-8'))
}

function transformArrayToDictionary(recipes: Recipe[]): RecipeDictionary {
  return Object.fromEntries(recipes.map((x) => [x.slug, x]))
}
