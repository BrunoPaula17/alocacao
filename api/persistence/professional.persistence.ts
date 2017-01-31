import { Professional } from '../../app/professional/Professional';
import { Customer } from '../../app/customer/customer';
import { ICrud } from './crud.interface';
import { MongoClient, Db, InsertOneWriteOpResult, FindAndModifyWriteOpResultObject, UpdateWriteOpResult, DeleteWriteOpResultObject } from 'mongodb';
import { mongoUrl } from '../server';
import { Connection } from './connection';

export class ProfessionalPersistence implements ICrud<Professional>{

    create(professional: Professional): Promise<Professional> {
        let database: Db = null;
        
        return Promise.resolve<Professional>(
            Connection.create()
                .then((db: Db) => {
                    database = db;
                    return db.collection('professionals').insertOne({
                            pid:professional.pid,
                            eid:professional.eid,
                            name:professional.name,
                            email:professional.email,
                            roleID:professional.roleID,
                            prefix:professional.prefix,
                            phone:professional.phone,
                            deleted:false,
                            role:null
                    })
                })

                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1){
                        return professional;
                    }
                    else{
                        return Promise.reject<Professional>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }


    list(): Promise<Professional[]> {

        let database: Db = null;

        return Promise.resolve(MongoClient.connect(mongoUrl))     
            .then((db: Db) => {
                database = db;
                return db.collection('professionals').find({"deleted": false}).toArray();
            })
            .then((professional: Professional[]) => {
                database.close();
                return professional;
    })};

    

    read(pid: number): Promise<Professional> {
        
        let database: Db;

        return Promise.resolve<Professional>(
            Connection.create()
                .then((db: Db) => {
                    database=db;
                    return db.collection ('professionals').findOne({"deleted": false, "pid": pid });
            })
            .then((professional : any) => {
                database.close();
                return professional as Professional;
            })
        );
        
    }

    update(professional: Professional): Promise<Professional> {
        let database: Db;

        return Promise.resolve<Professional>(
            Connection.create()
                .then((db: Db) => {
                    database = db;

                    return db.collection('professionals').findOneAndUpdate(
                        { pid: professional.pid },
                        {
                            pid:professional.pid,
                            eid:professional.eid,
                            name:professional.name,
                            email:professional.email,
                            roleID:professional.roleID,
                            prefix:professional.prefix,
                            phone:professional.phone,
                            deleted:false,
                            role:null
                        })
                })
                .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    if (updateResult.ok === 1)
                        return updateResult.value.role;
                    else
                        return Error("An error ocurred while retrieving updated sequence");
                }));
              
    }
    
    
    delete(pid:number): Promise<boolean>{
        let database: Db;

        return Promise.resolve<boolean>(
            Connection.create()
            .then((db:Db) =>{
                database = db;
                    return db.collection('professionals').findOneAndUpdate(
                        { pid: pid },
                        {
                            $set: {
                                'deleted': true
                            }
                        })
            .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    if (updateResult.ok === 1)
                        return true;
                    else
                        return false;
    })}))};
    
}
