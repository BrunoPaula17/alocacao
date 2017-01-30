import { Customer } from '../../app/customer/customer';
import { ICrud } from './crud.interface';
import { MongoClient, Db, InsertOneWriteOpResult, FindAndModifyWriteOpResultObject, UpdateWriteOpResult, DeleteWriteOpResultObject } from 'mongodb';
import { mongoUrl } from '../server';
import { Connection } from './connection';


export class CustomerPersistence implements ICrud<Customer>{


    create(customer: Customer): Promise<Customer> {
        let database: Db = null;
        let sequence: number;

        return Promise.resolve<Customer>(
            Connection.getNextSequence('customerID')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.create();
                })
                .then((db: Db) => {
                    database = db;
                    return db.collection('customers').insertOne({
                        customerID: sequence,
                        name: customer.name,
                        cnpj: +customer.cnpj,
                        responsible: customer.responsible,
                        contact: customer.contact,
                        email: customer.email,
                        deleted: customer.deleted
                        })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                        if (insertResult.result.ok == 1) {
                            return customer;
                        }
                        else {
                            return Promise.reject<Customer>(Error("An error ocurred when trying to create a new record"));
                        }
                    })
            );
    }

    list(): Promise<Customer[]> {

        let database: Db = null;
        return Promise.resolve(
            Connection.create()
            .then((db: Db) => {
                database = db;
                return db.collection('customers').find({ "deleted": false }).toArray();
            })
            .then((customer: Customer[]) => {
                database.close();
                return customer;
            }));
    }

    read(id: number): Promise<Customer> {
        //return this.customers.find(customer => customer.customerID === id && customer.deleted === false);

        let database: Db = null;
        return Promise.resolve<Customer>(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db.collection('customers').findOne({ "deleted": false, "customerID": id });
            })
            .then((customer: Customer) => {
                database.close();
                return customer;
            })
        );
    }

    update(custUpd: Customer): Promise<Customer> {

        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db.collection('customers').findOneAndUpdate({ "customerID": custUpd.customerID }, {
                    customerID: custUpd.customerID,
                    name: custUpd.name,
                    cnpj: +custUpd.cnpj,
                    responsible: custUpd.responsible,
                    contact: custUpd.contact,
                    email: custUpd.email,
                    deleted: custUpd.deleted
                }, { returnOriginal: false });
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
    }

    delete(id: number): Promise<boolean> {

        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db.collection('customers').deleteOne({ "customerID": id });
            })
            .then((updateResult: DeleteWriteOpResultObject) => {
                database.close();
                if (updateResult.result.ok == 1) {
                    return true;
                }
                else {
                    return false;
                }
            }));
    }

}


