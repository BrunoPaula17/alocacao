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
                return db.collection('projects').find( {"deleted": false} ).toArray();
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
        let sequence: number;

        return Promise.resolve<Project>(
            Connection.getNextSequence('projectId')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.create();
                })
                .then((db: Db) => {
                    database = db;

                    return db.collection('projects').insertOne({
                        projectId: sequence,
                        customerID: project.customerID,
                        customer:  null,
                        projectName: project.projectName,
                        startDate: project.startDate,
                        endDate: project.endDate,
                        pid: project.pid,
                        sponsor: null,
                        wbs: project.wbs,
                        deleted: false

                    });
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        project.projectId = sequence;

                        return project;
                    }
                    else {
                        return Promise.reject<Project>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }

    update(project: Project): Promise<Project>{
        let database: Db;
        let sequence: number;

        return Promise.resolve<Project>(
            Connection.create()
                .then((db: Db) => {
                    database = db;

                    return db.collection('projects').findOneAndUpdate(
                        { projectId: project.projectId },
                        {
                            projectId: project.projectId,
                            customerID: project.customerID,
                            customer:  null,
                            projectName: project.projectName,
                            startDate: project.startDate,
                            endDate: project.endDate,
                            pid: project.pid,
                            sponsor: null,
                            wbs: project.wbs,
                            deleted: false
                        })
                })
                .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    if (updateResult.ok === 1)
                        return updateResult.value.role;
                    else
                        return Error("An error ocurred while retrieving updated sequence");
                }));
    }

    delete(project: Project): Promise<boolean>{
        let database: Db;

        return Promise.resolve<boolean>(
            Connection.create()
            .then((db:Db) =>{
                database = db;
                return db.collection('projects')
                         .findOneAndUpdate(
                        { projectId: project.projectId },
                        {
                            projectId: project.projectId,
                            customerID: project.customerID,
                            customer:  null,
                            projectName: project.projectName,
                            startDate: project.startDate,
                            endDate: project.endDate,
                            pid: project.pid,
                            sponsor: null,
                            wbs: project.wbs,
                            deleted: true
                        })
            .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    if (updateResult.ok === 1)
                        return true;
                    else
                        return false;
    })}))};
}