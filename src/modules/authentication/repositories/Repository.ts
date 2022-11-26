import { Collection, Db } from 'mongodb';
import { Document } from 'bson';

export abstract class Repository<T extends Document> {
  protected constructor(collection: string, connection: Db) {
    this.collection = collection;
    this.repository = connection.collection<T>(collection);
  }

  protected readonly collection: string;
  protected readonly repository: Collection<T>;
}
