import { PostgresClient } from './database/PostgresClient'
import { RecipesRepository } from './database/RecipeRepository'

let _appCtx: App | undefined = undefined

export interface App {
  recipeRepository: RecipesRepository
}

async function appCtx(): Promise<App> {
  if (!_appCtx) {
    _appCtx = {
      recipeRepository: new RecipesRepository(
        await PostgresClient.create('postgresql://dev:dev@localhost:5432/dev')
      )
    }
  }
  return Promise.resolve(_appCtx)
}

export default await appCtx()
