import type { PostgresClient } from './PostgresClient'

export class RecipesRepository {
  constructor(private client: PostgresClient) {}

  async save(recipe: Recipe) {
    await this.client.query(
      'INSERT INTO recipes (slug, payload) VALUES ($1, cast($2 AS JSON)) ON CONFLICT (slug) DO UPDATE SET payload = cast($2 AS JSON)',
      [recipe.slug, JSON.stringify(recipe)]
    )
  }

  async findAll(): Promise<Recipe[]> {
    const result = await this.client.query('SELECT payload FROM recipes')
    return Promise.resolve(result.rows.map((row) => row['payload'] as Recipe))
  }

  async findBySlug(slug: string): Promise<Recipe | null> {
    const result = await this.client.query('SELECT * FROM recipes WHERE slug = $1', [slug])
    return result.rows.length === 1
      ? Promise.resolve(result.rows.map((row) => row['payload'] as Recipe)[0])
      : Promise.resolve(null)
  }
}
