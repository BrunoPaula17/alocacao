import { Injectable } from '@angular/core';
import { Project } from '../project/project'
import { Http, Response } from '@angular/http';

const SERVICE_URL: string = '/api/project'

@Injectable()
export class ProjectService {

    /*
        Construtor da classe.
    */
    constructor(private _httpService: Http) {}

    
    /*
        Recupera os detalhes dos projetos a partir dos clientes e profissionais.
    */
    getProjectsList(): Promise<Project[]> {
        let url: string =`${SERVICE_URL}/list`;
        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project[];
                   })

    }

    /*
        Recupera os detalhes dos projetos a partir dos clientes e profissionais.
    */
    getProjectDetail(project:Project): Promise<Project> {
        let url: string = `${SERVICE_URL}/detail/${project.projectId}`;
        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project;
                   })
    }


    /*
        Cria um novo projeto na base de dados.
    */
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

    /*
        Atualiza um projeto na base de dados.
    */
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


    /*
        Realiza a exclusão lógica do projeto na base de dados.
    */
     deleteProject(projectId:Number): Promise<Project> {
        let url: string = `${SERVICE_URL}/delete/${projectId}`;
        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project;
                   })
    }
}