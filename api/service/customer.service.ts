import { Router, Response, Request } from 'express';
import { Customer } from '../../app/customer/customer';
import { CustomerApplication } from '../application/customer.application';

const customerRouter: Router = Router();

customerRouter.get('/list', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    response.json(customerApp.getCustomers());
});

customerRouter.get('/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();
    
    let id: number = +request.params.id;

    return response.json(customerApp.getCustomer(id));
});


export { customerRouter }