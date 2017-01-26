import { MongoClient, Db } from 'mongodb';

// MongoDB Configuration
const mongoUrl: string = "mongodb://localhost:27017/alocacao";

export class Connection{
    static Create(): Promise<Db> {
        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db;
            }));
    }
}