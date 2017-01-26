import { MongoClient, Db, FindAndModifyWriteOpResultObject } from 'mongodb';

// MongoDB Configuration
const mongoUrl: string = "mongodb://localhost:27017/alocacao";

export class Connection {
    static create(): Promise<Db> {
        let database: Db = null;
        return Promise.resolve(
            MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                //Verificar no console do browser se a conexão com DB foi estabelecida
                console.log('Conectou');
                database = db;
                return db;
            })
            .catch((erro) => {
                //Verificar no console do browser se houve problemas ao conectar com DB
                console.log('Erro ' + erro);
            }));
    }

    static getNextSequence(sequenceName: string): Promise<number> {
        let database: Db;

        return this.create()
            .then((db: Db) => {
                database = db;

                return db.collection('counters').findOneAndUpdate(
                    { _id: sequenceName },
                    { $inc: { currentValue: 1 } }, { upsert: true, returnOriginal: false });
            })
            .then((updateResult: FindAndModifyWriteOpResultObject) => {
                if (updateResult.ok === 1)
                    return updateResult.value;
                else
                    return Error("An error ocurred while retrieving updated sequence");
            });

    }
}