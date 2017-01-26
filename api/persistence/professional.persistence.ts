import {Professional } from '../../app/professional/Professional';
import { ICrud } from './crud.interface';
import { MongoClient, Db } from 'mongodb';
import { mongoUrl } from '../server';

export class ProfessionalPersistence implements ICrud<Professional>{

    create(professional: Professional): Promise<Professional> {
        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db.collection('professionals').insert(JSON.stringify(professional));
            })
            .then(() => {
                database.close();
                 console.log("Inserted a document into the customers collection");                
            }));
    }

    list(): Promise<Professional[]> {

        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
        
        .then((db: Db) => {
            database = db;
            return db.collection('professional').find().toArray();
        })
        .then((customer: Professional[]) => {
            database.close();
            return customer;
        }));
    }

    read(id: number): Promise<Professional> {
        return null;
    }

    update(custUpd: Professional): Promise<Professional> {

        return null;
    }

    delete(id: number): Promise<boolean> {

        return null;
    }
}
