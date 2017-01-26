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


    createProject(project:Project): Promise<Project> {
        let url: string=`${SERVICE_URL}/create/${project.projectId}/
                                               ${project.projectName}/
                                               ${project.wbs}/
                                               ${project.startDate}/
                                               ${project.endDate}/
                                               ${project.customer.customerID}/
                                               ${project.sponsor.pid}/`;
        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project;
                   })
    }

    updateProject(project:Project): Promise<Project> {
    let url: string=`${SERVICE_URL}/update/${project.projectId}/
                                           ${project.projectName}/
                                           ${project.wbs}/
                                           ${project.startDate}/
                                           ${project.endDate}/
                                           ${project.customer.customerID}/
                                           ${project.sponsor.pid}/`;
    return this._httpService.get(url)
               .toPromise()
               .then((response: Response) => {
                    return response.json() as Project;
               })
    }



     deleteProject(projectId:Number): Promise<Project> {
        let url: string = `${SERVICE_URL}/delete/${projectId}`;
        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project;
                   })
    }
}