import { Injectable } from '@angular/core';

import { Project } from '../project/project'

import { Http, Response } from '@angular/http';

const SERVICE_URL: string = '/api/project'

@Injectable()
export class ProjectService {
    constructor(private _httpService: Http) {}


    getProjectsList(): Promise<Project[]> {
        let url: string =`${SERVICE_URL}/list`;
        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project;
                   })

    }

    getProjectDetail(projectId:Number): Promise<Project> {
        let url: string = `${SERVICE_URL}/detail/${projectId}`;
        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project;
                   })
    }

    /*insertProject(project: Project): Project {
        this._PROJECTS.push(project);
        return project;
    }

    updateProject(project: Project): Project {
        this._PROJECTS.filter(function () { });
        return project;
    }

    deleteProject(projectID: number): Promise<Boolean> {
        this._PROJECTS = this._PROJECTS.filter(function (project: Project) {
            return project.projectId != projectID
        });
        return Promise.resolve(true);
    }*/
}