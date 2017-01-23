import { Router, Response, Request } from 'express';
import { Customer } from '../../app/customer/customer';
import { CustomerApplication } from '../application/customer.application';

const customerRouter: Router = Router();

customerRouter.get('/create/:customer', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let customer: Customer = (Customer)+request.params.customer;

    return response.json(customerApp.createCustomer(customer));
});

customerRouter.get('/list', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    response.json(customerApp.listCustomers());
});

customerRouter.get('/details/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();
    
    let id: number = +request.params.id;

    return response.json(customerApp.readCustomer(id));
});

customerRouter.get('/update/:customer', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let customer: Customer = (Customer)+request.params.customer;

    return response.json(customerApp.updateCustomer(customer));
});

customerRouter.get('/delete/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let id: number = +request.params.id;

    return response.json(customerApp.deleteCustomer(id));
});


export { customerRouter }