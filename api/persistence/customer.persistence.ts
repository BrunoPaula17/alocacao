import { Customer } from '../../app/customer/customer';
import { ICrud } from './crud.interface';
import { MongoClient, Db, UpdateWriteOpResult, DeleteWriteOpResultObject } from 'mongodb';
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
            return db.collection('customers').find({"deleted": false }).toArray();
        })
        .then((customer: Customer[]) => {
            database.close();
            return customer;
        }));

    }

    read(id: number): Promise<Customer> {
        //return this.customers.find(customer => customer.customerID === id && customer.deleted === false);

         let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database=db;
                return db.collection ('customers').findOne({ "deleted": false, "customerID": id });
            })
            .then((customer : Customer) => {
                database.close();
                return customer;
            })
        );
    }

    update(custUpd: Customer): Promise<Customer> {

        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database=db;
                return db.collection ('customers').updateOne({"customerID": custUpd.customerID }, custUpd);
            })
            .then((updateResult: UpdateWriteOpResult) => {
                    if (updateResult.result.ok == 1){
                        return custUpd;
                    }
                    else
                    {
                        return null;
                    }
            }));
        
        // let _customer: Customer;
  
        // _customer = this.customers.find(customer => customer.customerID === custUpd.customerID);

        // if(_customer != null){
        //     this.customers[this.customers.indexOf(_customer)] = custUpd;
        // }
        // else{
        //     _customer = null;     
        // }

        // return _customer;

    }

    delete(id: number): Promise<boolean> {

        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database=db;
                return db.collection ('customers').deleteOne({"customerID": id });
            })
            .then((updateResult: DeleteWriteOpResultObject) => {
                    if (updateResult.result.ok == 1){
                        return true;
                    }
                    else
                    {
                        return false;
                    }
            }));
    }
}


