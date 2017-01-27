import { Router, Request, Response } from 'express';
import { Project } from '../../app/project/project';
import { ProjectApplication } from '../application/project.application';

const projectRouter : Router = Router();

/*
    Recupera a lista de projetos da base de dados
*/
projectRouter.get('/list', (request: Request, response: Response) =>{
    let projectApp: ProjectApplication = new ProjectApplication();
    
    projectApp.getProjects()
        .then((projects: Project[]) =>{
            response.json(projects);
        });
});

/*
    Recupera um projeto da base de dados
*/
projectRouter.get('/detail/:projectId', (request: Request, response: Response) => {
    let projectApp: ProjectApplication = new ProjectApplication();
    let projectId: number = +request.params.projectId;
    
    projectApp.getProject(projectId)
        .then((project: Project) => {
            response.json(project);
        });
});

// /*
//     Insere um projeto da base de dados
// */
// projectRouter.get('/insert/:projectId/:client/:startDate/:endDate/:concludeDate/:sponsor/:name/:wbs',
//                 (request: Request, response: Response) =>{
//     let projectApp: ProjectApplication = new ProjectApplication();
    
//     let projectId: number = +request.params.projectId;
//     let customer:  number = +request.params.client;
//     let projectName: string = request.params.projectName;
//     let startDate: Date = request.params.startDate;
//     let endDate: Date = request.params.endtDate;
//     let sponsor: number = +request.params.sponsor;
//     let wbs: string = request.params.wbs;
//     let deleted: boolean = request.params.deleted;

//     return response.json(projectApp.Create(projectId, customer, projectName, startDate, endDate, sponsor, wbs, deleted));
// });
// /*
//     Atualiza um projeto na base de dados
// */
// projectRouter.put('/update/:projectId/:customer/:projectName/:startDate/:endDate/:sponsor/:wbs/:deleted',
//                 (request: Request, response: Response) =>{
//     let projectApp: ProjectApplication = new ProjectApplication();
      
//     let projectId: number = +request.params.projectId;
//     let customer:  number = +request.params.client;
//     let projectName: string = request.params.projectName;
//     let startDate: Date = request.params.startDate;
//     let endDate: Date = request.params.endtDate;
//     let sponsor: number = +request.params.sponsor;
//     let wbs: string = request.params.wbs;
//     let deleted: boolean = request.params.deleted;

//     return response.json(projectApp.Update(projectId, customer, projectName, startDate, endDate, sponsor, wbs, deleted));
// });

// /*
//     Deletar um projeto da base de dados
// */
// projectRouter.get('/details/:projectId', (request: Request, response: Response) => {
//     let projectApp: ProjectApplication = new ProjectApplication();
    
//     let projectId: number = +request.params.projectId;
    
//     return response.json(projectApp.Delete(projectId));
// });


export { projectRouter } 
