import pg from 'pg'
import type { QueryResult, Pool, PoolClient } from 'pg'

export class PostgresClient {
  static async create(connectionString: string): Promise<PostgresClient> {
    const client = new PostgresClient(connectionString)
    await client.connect()
    return Promise.resolve(client)
  }

  private constructor(
    connectionString: string,
    private pool: Pool = new pg.Pool({ connectionString })
  ) {
    this.configurePool()
  }

  private configurePool() {
    this.pool.on('error', (error: Error) => {
      console.error(error)
    })
    this.pool.on('acquire', (client: PoolClient) => {
      client.on('error', (e: unknown) => {
        console.error(e)
      })
    })
  }

  private async connect() {
    await this.pool
      .connect()
      .catch((e: Error) => console.error('failed to connect with database', e))
  }

  async query(statement: string, values: string[] = []): Promise<QueryResult> {
    return this.pool.query(statement, values)
  }
}
