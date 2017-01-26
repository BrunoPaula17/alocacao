import {Professional } from '../../app/professional/Professional';
import { MongoClient, Db, UpdateWriteOpResult } from 'mongodb';
import { ICrud } from './crud.interface';
import { mongoUrl } from '../server';

export class ProfessionalPersistence implements ICrud<Professional>{

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
   

    read(pid: number): Promise<Professional> {

        let database: Db = null;

        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database=db;
                return db.collection ('professionals').findOne({ "deleted": false, "professionalPID": pid });
            })
            .then((professional : Professional) => {
                database.close();
                return professional;
            })
        );
    }

    update(professionalUpdate: Professional): Promise<Professional> {
        
        let database: Db;

        return Promise.resolve(
            MongoClient.connect(mongoUrl)
                .then((db: Db) => {
                    let _professionalUpdate: Professional ;
                    return db.collection('professionals').findOneAndUpdate({ bookingID: professionalUpdate.pid }, professionalUpdate);
                })
                .then((updateResult: UpdateWriteOpResult) => {
                    if (updateResult.result.ok == 1)
                        return professionalUpdate;
                }));
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
       
    }
}
