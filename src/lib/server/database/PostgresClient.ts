import { Pool, type QueryResult } from 'pg'

export class PostgresClient {
  static async create(connectionString: string): Promise<PostgresClient> {
    const client = new PostgresClient(connectionString)
    await client.connect()
    return Promise.resolve(client)
  }

  private constructor(
    private connectionString: string,
    private pool: Pool = new Pool({ connectionString })
  ) {}

  private async connect() {
    await this.pool.connect()
  }

  async query(statement: string, values: string[] = []): Promise<QueryResult> {
    return this.pool.query(statement, values)
  }
}
