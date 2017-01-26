import { MongoClient, Db } from 'mongodb';

// MongoDB Configuration
const mongoUrl: string = "mongodb://localhost:27017/alocacao";

export class Connection{
    static Create(): Promise<Db> {
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
}