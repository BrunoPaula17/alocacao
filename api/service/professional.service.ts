;import {Router, Request, Response} from 'express';
import { Professional } from '../../app/professional/professional';

const professionalRouter: Router = Router();

professionalRouter.get('/create', (request: Request, response: Response) => {
    let professionalApp: professionalApplication = new professionalApplication();

    let professional: Professional = request.params;

    response.json(professionalApp.insertProfessionals(professional));

}); 

professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    response.json(professionalApp.getProfessionals());
});

professionalRouter.get('/:id', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let id:number = +request.params.id;

    return response.json(professionalApp.getBooking(id));
});




export { professionalRouter } 

