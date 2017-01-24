import { Router, Request, Response } from 'express';
import { Professional } from '../../app/professional/professional';
import { ProfessionalApplication } from '../application/professional.application';

const professionalRouter: Router = Router();


/*
    Recupera a lista de professionais da base de dados.
*/
professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();
    response.json(professionalApp.List());
});


/*
    Recupera um profissional da base de dados.
*/
professionalRouter.get('/details/:pid', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();
    let pid:number = +request.params.pid;
    return response.json(professionalApp.Read(pid));
});


/*
    Insere um profissional na base de dados.
*/
professionalRouter.get('/insert/:pid/:eid/:name/:email/:roleID/:prefix/:phone', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let pid:number = +request.params.pid;
    let eid:string = request.params.eid;
    let name:string = request.params.name;
    let email:string = request.params.email;
    let roleID:number = +request.params.roleID;
    let prefix:number = +request.params.prefix;
    let phone:string = request.params.phone;

    response.json(professionalApp.Create(pid,eid,name,email,roleID,prefix,phone));

}); 


/*
   Atualiza um profissional na base de dados.
*/
professionalRouter.get('/update/:pid/:eid/:name/:email/:roleID/:prefix:/phone', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let pid:number = +request.params.pid;
    let eid:string = request.params.eid;
    let name:string = request.params.name;
    let email:string = request.params.email;
    let roleID:number = +request.params.roleID;
    let prefix:number = +request.params.prefix;
    let phone:string = request.params.phone;

    response.json(professionalApp.Update(pid,eid,name,email,roleID,prefix,phone));

});


/*
    Deleta um profissional na base de dados.
*/
professionalRouter.get('/delete/:pid', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let pid:number = + request.params.pid;
    return response.json(professionalApp.Delete(pid));

});






export { professionalRouter } 

