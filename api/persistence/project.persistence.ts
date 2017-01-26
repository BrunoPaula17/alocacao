import {Project } from '../../app/project/project';
import { ICrud } from './crud.interface';
import { MongoClient, Db } from 'mongodb';
import { mongoUrl } from '../server';

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
        return null;//this.projects.find(project => project.projectId === projectId);
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

    delete(projectDelete: number): Promise<boolean>{
        // let project: Project = this.projects.find(p => p.projectId === projectDelete.projectId);
        // if (project != null) {
        //     project.deleted = true;
        //     return true;
        // }
        // else
        //     return false;
        return null;
    }
}