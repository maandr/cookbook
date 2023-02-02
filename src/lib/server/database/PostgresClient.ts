import pg from 'pg'
import type { QueryResult, Pool } from 'pg'

export class PostgresClient {
  static async create(connectionString: string): Promise<PostgresClient> {
    const client = new PostgresClient(connectionString)
    await client.connect().catch((e: unknown) => console.error('failed to connect to database', e))
    return Promise.resolve(client)
  }

  private constructor(
    connectionString: string,
    private pool: Pool = new pg.Pool({ connectionString })
  ) {}

  private async connect() {
    await this.pool.connect()
  }

  async query(statement: string, values: string[] = []): Promise<QueryResult> {
    return this.pool.query(statement, values)
  }
}
