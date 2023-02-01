import { config } from './appConfig'
import { PostgresClient } from './database/PostgresClient'
import { RecipesRepository } from './database/RecipeRepository'

let _appCtx: AppContext | undefined = undefined

export interface AppContext {
  config: AppConfig
  recipeRepository: RecipesRepository
}

async function appCtx(): Promise<AppContext> {
  if (!_appCtx) {
    _appCtx = {
      config,
      recipeRepository: new RecipesRepository(
        await PostgresClient.create(config.database.connectionUrl)
      )
    }
  }
  return Promise.resolve(_appCtx)
}

export default async function () {
  return await appCtx()
}
