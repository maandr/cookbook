import { env } from '$env/dynamic/private'

if (!env.COOKBOOK_DB_CONNECTION_URL)
  throw Error('Missing environment variable COOKBOOK_DB_CONNECTION_URL')

if (!env.COOKBOOK_IMAGE_DIR) throw Error('Missing environment variable COOKBOOK_IMAGE_DIR')

export const config: AppConfig = {
  database: { connectionUrl: env.COOKBOOK_DB_CONNECTION_URL },
  imageDir: env.COOKBOOK_IMAGE_DIR
}
