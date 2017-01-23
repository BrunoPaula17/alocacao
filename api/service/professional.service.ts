import { Router, Request, Response } from 'express';
import { Professional } from '../../app/professional/professional';
import { ProfessionalApplication } from '../application/professional.application';

const professionalRouter: Router = Router();

professionalRouter.get('/insert/:pid/:eid/:name/:email/:roleID/:prefix/:phone', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let pid:number = +request.params.pid;
    let eid:string = request.params.eid;
    let name:string = request.params.name;
    let email:string = request.params.email;
    let roleID:number = +request.params.roleID;
    let prefix:number = +request.params.prefix;
    let phone:string = request.params.phone;

    //response.json(professionalApp.insertProfessionals(action,pid,eid,name,email,roleID,prefix,phone));

}); 

professionalRouter.get('/update/:pid/:eid/:name/:email/:roleID/:prefix:/phone', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let pid:number = +request.params.pid;
    let eid:string = request.params.eid;
    let name:string = request.params.name;
    let email:string = request.params.email;
    let roleID:number = +request.params.roleID;
    let prefix:number = +request.params.prefix;
    let phone:string = request.params.phone;

    //response.json(professionalApp.updateProfessional(action,pid,eid,name,email,roleID,prefix,phone));

});


professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    response.json(professionalApp.getProfessionals());
});


professionalRouter.get('/details/:pid', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let pid:number = +request.params.pid;

    //return response.json(professionalApp.getProfessional(action,pid));
});

professionalRouter.get('/delete/:pid', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let pid:number = + request.params.pid;
    //return response.json(professionalApp.deleteProfessional(action,pid));

});






export { professionalRouter } 

