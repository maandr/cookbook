import type { PostgresClient } from './PostgresClient'

export class RecipesRepository {
  constructor(private client: PostgresClient) {}

  async initalizeSchema() {
    await this.client.query(
      'CREATE TABLE IF NOT EXISTS recipes (id uuid not null primary key, payload jsonb not null)'
    )
  }

  async save(recipe: Recipe) {
    await this.client.query(
      'INSERT INTO recipes (id, payload) VALUES ($1, cast($2 AS JSON)) ON CONFLICT (id) DO UPDATE SET payload = cast($2 AS JSON)',
      [recipe.id, JSON.stringify(recipe)]
    )
  }

  async findAll(): Promise<Recipe[]> {
    const result = await this.client.query('SELECT payload FROM recipes')
    return Promise.resolve(result.rows.map((row) => row['payload'] as Recipe))
  }

  async findById(id: string): Promise<Recipe | null> {
    const result = await this.client.query('SELECT * FROM recipes WHERE id = $1', [id])
    return result.rows.length === 1
      ? Promise.resolve(result.rows.map((row) => row['payload'] as Recipe)[0])
      : Promise.resolve(null)
  }
}
