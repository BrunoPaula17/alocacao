import {Project } from '../../app/project/project';
import {Customer} from '../../app/customer/customer';
import {Professional} from '../../app/professional/professional';
import { ICrud } from './crud.interface';
import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb';
import { mongoUrl } from '../server';
import { Connection } from './connection';


export class ProjectPersistence implements ICrud<Project>{

    list(): Promise<Project[]>{
        let database: Db = null;

        return Promise.resolve(MongoClient.connect(mongoUrl))
            .then((db: Db) =>{
                database = db;
                return db.collection('projects').find().toArray();
            })
            .then((project: Project[]) =>{
                database.close();
                return project;
            })
    }

    read(projectId: number): Promise<Project>{
        let database: Db;

        return Promise.resolve<Project>(
            Connection.create()
            .then((db: Db) =>{
                database = db;
                return db.collection('projects').findOne({"deleted": false, "projectId": projectId});
            })
            .then((project: any)=>{
                database.close();
                return project as Project;
        }));
    }

   create(project: Project): Promise<Project>{
        let database: Db;
        let sequence:number;

        return Promise.resolve<Project>(
            Connection.getNextSequence('projectId')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.create();
                })
                .then((db: Db) =>{
                database = db;

                return db.collection('projects').insertOne({
                    projectId: project.projectId,
                    customerID: Customer.customerID,
                    customer: Customer.name;
                    projectName: project.projectName,
                    startDate: project.startDate,
                    endDate: project.endDate,
                    pid: professional.pid,
                    sponsor: Professional.name,
                    wbs: project.wbs,
                    deleted: project.deleted
                })
            })
            .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        project.projectId = sequence;

                        return project;
                    }
                    else {
                        return Promise.reject<Project>(Error("An error ocurred when trying to create a new record"));
                    }
        }));
    }

    update(projectUpdate: Project): Promise<Project>{
        // let project: Project = this.projects.find(p => p.projectId === projectUpdate.projectId);
        // if(projectUpdate != null){
        //     project = projectUpdate;
        //     return project;
        // }else
        //     return null;
        return null;
    }

    delete(projectId: number): Promise<boolean>{
        let database: Db;

        return Promise.resolve(
            Connection.create()
            .then((db:Db) =>{
                database = db;
                return db.collection('projects').remove({'projectId': projectId});
            })
            .then((result) =>{
                database.close();
                return true;
            })
            .catch((erro) =>{
                console.log(erro);
                return false;
            })
        )
    }
}