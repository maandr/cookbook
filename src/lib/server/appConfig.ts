import { env } from '$env/dynamic/private'

if (!env.COOKBOOK_DB_CONNECTION_URL)
  throw Error('Missing environment variable COOKBOOK_DB_CONNECTION_URL')

export const config: AppConfig = {
  database: { connectionUrl: env.COOKBOOK_DB_CONNECTION_URL }
}
