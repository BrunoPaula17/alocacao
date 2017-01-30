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

/*
    Insere um projeto da base de dados
*/
projectRouter.post('/create',(request: Request, response: Response) =>{
    let projectApp: ProjectApplication = new ProjectApplication();

    let project: Project = new Project();
    project = JSON.parse(request.body.project);

    projectApp.create(project)
        .then((project: Project) => {
            response.json(project);
        });
});

/*
    Atualiza um projeto na base de dados
*/
projectRouter.put('/update/',(request: Request, response: Response) =>{
    let projectApp: ProjectApplication = new ProjectApplication();

    let project = JSON.parse(request.body.project);

    projectApp.update(project)
              .then((project: Project) => {
                response.json(project);
              });
    
});

/*
    Deletar um projeto da base de dados
*/
projectRouter.get('/delete/:projectId', (request: Request, response: Response) => {
    let projectApp: ProjectApplication = new ProjectApplication();
    
    let projectId: number = +request.params.projectId;
    
    return response.json(projectApp.delete(projectId));
});


export { projectRouter } 
