import { Customer } from '../../app/customer/customer';
import { ICrud } from './crud.interface';
import { MongoClient, Db, InsertOneWriteOpResult, FindAndModifyWriteOpResultObject, UpdateWriteOpResult, DeleteWriteOpResultObject } from 'mongodb';
import { mongoUrl } from '../server';


export class CustomerPersistence implements ICrud<Customer>{


    create(customer: Customer): Promise<Customer> {
        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db.collection('customers').insert(JSON.stringify(customer));
            })
            .then((insertResult: InsertOneWriteOpResult) => {
                database.close();
                console.log("Inserted a document into the customers collection");    
                if (insertResult.insertedId != null){
                        customer.customerID = +insertResult.insertedId;
                        return insertResult.insertedId;
                    }
                    else
                    {
                        return null;
                    }
                
                             
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
                return db.collection ('customers').findOneAndUpdate({"customerID": custUpd.customerID }, {
                        customerID: custUpd.customerID,
                        name: custUpd.name,
                        responsible: custUpd.name,
                        contact: custUpd.contact,
                        email: custUpd.email,
                        deleted: custUpd.email
                    }, {returnOriginal: false});
            })
            .then((updateResult: FindAndModifyWriteOpResultObject) => {
                database.close();

                if (updateResult.ok == 1)
                    return updateResult.value;
                else
                    return Error("An error ocurred while triyng to update a record");
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


