import { type Collection, MongoClient } from 'mongodb'

export class MongoHelper {
  private static client: MongoClient | null = null
  private static uri: string | null = null

  static async connect(uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  }

  static async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close()
      this.client = null
    }
  }

  static getCollection(name: string): Collection | undefined {
    if (!this.client) throw new Error('MongoHelper: client not initialised')
    return this.client.db().collection(name)
  }
}
