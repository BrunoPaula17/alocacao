import { Router, Request, Response } from 'express';
import { Professional } from '../../app/professional/professional';
import { ProfessionalApplication } from '../application/professional.application';

const professionalRouter: Router = Router();

/*
    Recupera a lista de professionais da base de dados.
*/
professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();
    professionalApp.List()
        .then((professionals: Professional[]) => {
            response.json(professionals);
        })
});

/*
    Recupera um profissional da base de dados.
*/
professionalRouter.get('/details/:pid', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();
    let pid: number = +request.params.pid;
    professionalApp.Read(pid)
        .then((professional: Professional) =>  {
            response.json(professional);
    })
 });

/*
   Atualiza um profissional na base de dados.
*/
professionalRouter.get('/update/:pid/:eid/:name/:email/:roleID/:prefix/:phone', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();
    let pid: number = +request.params.pid;
    let eid: string = request.params.eid;
    let name: string = request.params.name;
    let email: string = request.params.email;
    let roleID: number = +request.params.roleID;
    let prefix: number = +request.params.prefix;
    let phone: string = request.params.phone;

    professionalApp.Update(pid, eid, name, email, roleID, prefix, phone)
        .then((professional: Professional) =>  {
            response.json(professional);
    })
});

/*
    Deleta um profissional na base de dados.
*/
professionalRouter.delete('/delete/:pid', (request: Request, response: Response) => {
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let pid: number = +request.params.pid;
        return response.json(professionalApp.Delete(pid));
});

professionalRouter.get('/insert/:pid/:eid/:name/:email/:roleID/:prefix/:phone', (request: Request, response: Response) => {  
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();  
    let pid: number = +request.params.pid;  
    let eid: string = request.params.eid;  
    let name: string = request.params.name;  
    let email: string = request.params.email;  
    let roleID: number = +request.params.roleID;  
    let prefix: number = +request.params.prefix;  
    let phone: string = request.params.phone;  
   
    professionalApp.Create(pid, eid, name, email, roleID, prefix, phone)  
        .then((professional: Professional) =>  {  
            response.json(professional);  
    })  
});  

export { professionalRouter }
