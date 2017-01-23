import {Router, Response, Request} from 'express';
import { Role } from '../../app/role/role';
import { RoleApplication } from '../application/role.application';

const roleRouter: Router = Router();

roleRouter.get('/list', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    return response.json(roleApp.getRoles());
});

roleRouter.get('/:id', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let id: number = +request.params.id;

    return response.json(roleApp.getRole(id));
});

export { roleRouter }