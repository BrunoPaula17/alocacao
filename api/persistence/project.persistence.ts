import {Project } from '../../app/project/project';
import { ICrud } from './crud.interface';
import { MongoClient, Db } from 'mongodb';
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

    create(projectCreate: Project): Promise<Project>{
        // this.projects.push(projectCreate);
        // return projectCreate;
        return null;
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