import {Router, Response, Request} from 'express';
import { Role } from '../../app/role/role';
import { RoleApplication } from '../application/role.application';

const roleRouter: Router = Router();

roleRouter.get('/list', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    roleApp.listRoles()
        .then((roles: Role[]) => {
            response.json(roles);
        });
});

roleRouter.get('/read/:id', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let id: number = +request.params.id;

    roleApp.readRole(id)
        .then((role: Role) => {
            response.json(role);
        });
});

roleRouter.delete('/delete/:id', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let id: number = +request.params.id;

    roleApp.deleteRole(id)
        .then(() => {
            response.json(true);
        })
        .catch((() => {
            response.json(false);
        }));
});

roleRouter.post('/create/:role', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let role: Role = (Role)+request.params.role;

    roleApp.createRole(request.body.role)
        .then((role: Role) => {
            response.json(role);
        });
});

roleRouter.put('/update/:role', (request: Request, response: Response) => {
    let roleApp: RoleApplication = new RoleApplication();

    let role: Role = (Role)+request.params.role;

    roleApp.updateRole(request.body.role)
        .then((role: Role) => {
            response.json(role);
        });
});

export { roleRouter }