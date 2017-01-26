import { Customer } from '../../app/customer/customer';
import { ICrud } from './crud.interface';
import { MongoClient, Db } from 'mongodb';
import { mongoUrl } from '../server';


export class CustomerPersistence implements ICrud<Customer>{


    create(customer: Customer): Promise<Customer> {
        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db.collection('customers').insert(JSON.stringify(customer));
            })
            .then(() => {
                database.close();
                 console.log("Inserted a document into the customers collection");                
            }));

    }

    list(): Promise<Customer[]> {

        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
        
        .then((db: Db) => {
            database = db;
            return db.collection('customers').find().toArray();
        })
        .then((customer: Customer[]) => {
            database.close();
            return customer;
        }));

    }

    read(id: number): Promise<Customer> {
         let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
        
        .then((db: Db) => {
            database = db;
            return db.collection('customers').findOne({ "customerID": id });
        })
        .then((customer: Customer) => {
            database.close();
            return customer;
        }));

    }

    update(custUpd: Customer): Promise<Customer> {

        return null;
    }

    delete(id: number): Promise<boolean> {

        return null;
    }
}


