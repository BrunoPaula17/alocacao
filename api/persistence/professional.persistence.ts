import { Professional } from '../../app/professional/Professional';
import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

export class ProfessionalPersistence implements ICrud<Professional>{

    create(professionalCreate: Professional): Promise<Professional> {
    
        let database: Db = null;
        let sequence: number;

        //
        return Promise.resolve<Professional>(
            Connection.getNextSequence('pid')
                
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.create();
                })

                .then((db: Db) => {

                    database = db;
                
                    return db.collection('professionals').insertOne({
                            _id: sequence,
                            pid:professionalCreate.pid,
                            eid:professionalCreate.eid,
                            name:professionalCreate.name,
                            email:professionalCreate.email,
                            roleID:professionalCreate.roleID,
                            prefix:professionalCreate.prefix,
                            phone:professionalCreate.phone,
                            deleted:professionalCreate.deleted,
                            role:professionalCreate.role
                    })
                })

                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1){
                        professionalCreate.pid = sequence;
                    }
                    else{
                        return Promise.reject<Professional>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }


    list(): Promise<Professional[]> {

        let database: Db;

        return Promise.resolve(

            Connection.create()
        
            .then((db: Db) => {
                database = db;
                return db.collection('professionals').find().toArray();
            })

            .then((professional: Professional[]) => {
                database.close();
                return professional;
            }));
    }

    

    read(pid: number): Promise<Professional> {
        
        let database: Db;

        return Promise.resolve(
            Connection.create()
                .then((db: Db) => {
                    database=db;
                    return db.collection ('professionals').findOne({"pid": pid });
            })
            .then((professional : any) => {
                database.close();
                return professional as Professional;
            })
        );
        
    }

    update(professionalUpdate: Professional): Promise<Professional> {
       
        let database: Db;

        return Promise.resolve(
            
            Connection.create()

                .then((db: Db) => {
                    database.db;
                    return db.collection('professionals').findOneAndUpdate({ pid: professionalUpdate.pid},{
                            pid:professionalUpdate.pid,
                            eid:professionalUpdate.eid,
                            name:professionalUpdate.name,
                            email:professionalUpdate.email,
                            roleID:professionalUpdate.roleID,
                            prefix:professionalUpdate.prefix,
                            phone:professionalUpdate.phone,
                            deleted:professionalUpdate.deleted,
                            role:professionalUpdate.role
                    }, { returnOriginal: false });
                })

                .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    database.close
                    if (updateResult.ok == 1)
                        return professionalUpdate;
                    else
                        return Error("An error ocurred while triyng to update a record");
                }));
              
    }
    
    
    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }

    
}
