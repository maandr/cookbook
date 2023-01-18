import fs, { Dirent } from 'fs'

const RECIPES_FOLDER = './static/recipes/'
const IMAGES_FOLDER = '/images/'

export function loadRecipes(): Recipe[] {
  return fs
    .readdirSync(RECIPES_FOLDER, { withFileTypes: true, encoding: 'utf-8' })
    .filter((file) => file.isFile())
    .map((file) => parseRecipe(file))
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

export function saveRecipe(recipe: Recipe) {
  fs.writeFileSync(fileName(recipe), JSON.stringify(recipe, null, 2))
}

function fileName(recipe: Recipe): string {
  return RECIPES_FOLDER + recipe.slug + '.json'
}
