import { Router, Request, Response } from 'express';
import { Project } from '../../app/project/project';
import { ProjectApplication } from '../application/project.application';

const projectRouter : Router = Router();

/*
    Recupera a lista de projetos da base de dados
*/
projectRouter.get('/list', (request: Request, response: Response) =>{
    let projectApp: ProjectApplication = new ProjectApplication();
    response.json(projectApp.List());
});

/*
    Recupera um projeto da base de dados
*/
projectRouter.get('/details/:projectID', (request: Request, response: Response) => {
    let projectApp: ProjectApplication = new ProjectApplication();
    let projectID: number = +request.params.projectID;
    return response.json(projectApp.Read(projectID));
});

/*
    Insere um projeto da base de dados
*/
projectRouter.get('/insert/:projectID/:client/:startDate/:endDate/:concludeDate/:sponsor/:name/:wbs',
                (request: Request, response: Response) =>{
    let projectApp: ProjectApplication = new ProjectApplication();
    
    let projectID: number = +request.params.projectID;
    let client:  number = +request.params.client;
    let startDate: Date = request.params.startDate;
    let endDate: Date = request.params.endtDate;
    let concludeDate: Date = request.params.concludeDate;
    let sponsor:  number = request.params.sponsor;
    let name: string = request.params.name;
    let wbs: string = request.params.wbs;

    return response.json(projectApp.Create(projectID, client, startDate, endDate, concludeDate, sponsor,name, wbs));
});
/*
    Atualiza um projeto na base de dados
*/
projectRouter.put('/update/:projectID/:client/:startDate/:endDate/:concludeDate/:sponsor/:name/:wbs',
                (request: Request, response: Response) =>{
    let projectApp: ProjectApplication = new ProjectApplication();
    
    let projectID: number = +request.params.projectID;
    let client:  number = +request.params.client;
    let startDate: Date = request.params.startDate;
    let endDate: Date = request.params.endtDate;
    let concludeDate: Date = request.params.concludeDate;
    let sponsor:  number = request.params.sponsor;
    let name: string = request.params.name;
    let wbs: string = request.params.wbs;

    return response.json(projectApp.Update(projectID, client, startDate, endDate, concludeDate, sponsor,name, wbs));
});

/*
    Deletar um projeto da base de dados
*/
projectRouter.get('/details/:projectID', (request: Request, response: Response) => {
    let projectApp: ProjectApplication = new ProjectApplication();
    
    let projectID: number = +request.params.projectID;
    
    return response.json(projectApp.Delete(projectID));
});


export { projectRouter } 
