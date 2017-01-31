import { Injectable,  } from '@angular/core';
import { Project } from '../project/project';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const SERVICE_URL: string = '/api/project'
const HEADERS: Headers = new Headers({
    'Content-Type': 'application/json'
});

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
    getProjectDetail(projectId:number): Promise<Project> {
        let url: string = `${SERVICE_URL}/detail/${projectId}`;
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
        let url: string=`${SERVICE_URL}/create`;
        return this._httpService.post(url, { 'project': JSON.stringify(project) }, HEADERS)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Project;
                   })
                   .catch(this.erroHandling);
    }

    /*
        Atualiza um projeto na base de dados.
    */
    updateProject(project:Project): Promise<Project> {
    let url: string=`${SERVICE_URL}/update/`
    return this._httpService.put(url, {'project': JSON.stringify(project)}, HEADERS)
               .toPromise()
               .then((response: Response) => {
                    return response.json() as Project;
               })
               .catch(this.erroHandling);
    }


    /*
        Realiza a exclusão lógica do projeto na base de dados.
    */
     deleteProject(project:Project): Promise<Project> {
        let url: string=`${SERVICE_URL}/delete/`
        return this._httpService.put(url, {'project': JSON.stringify(project)}, HEADERS)
                  .toPromise()
                  .then((response: Response) => {
                       return response.json() as Project;
                  })
                  .catch(this.erroHandling);
    }

    erroHandling(error: any) { 
        console.log(error.message || error); 
    }
}