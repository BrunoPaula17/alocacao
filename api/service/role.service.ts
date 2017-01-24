import {Router, Response, Request} from 'express';
import { Role } from '../../app/role/role';
import { RoleApplication } from '../application/role.application';

const roleRouter: Router = Router();

roleRouter.get('/list', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    return response.json(roleApp.ListRoles());
});

roleRouter.get('/read/:id', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let id: number = +request.params.id;

    return response.json(roleApp.ReadRole(id));
});

roleRouter.get('/delete/:id', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let id: number = +request.params.id;

    return response.json(roleApp.DeleteRole(id));
});

/*?*/

roleRouter.get('/create/:role', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let role: Role = (Role)+request.params.role;

    return response.json(roleApp.CreateRole(role));
});

roleRouter.get('/update/:role', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let role: Role = (Role)+request.params.role;

    return response.json(roleApp.UpdateRole(role));
});

export { roleRouter }