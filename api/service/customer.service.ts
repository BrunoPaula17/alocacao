import { Router, Response, Request } from 'express';
import { Customer } from '../../app/customer/customer';
import { CustomerApplication } from '../application/customer.application';

const customerRouter: Router = Router();

customerRouter.post('/create/:customer', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let customer: Customer = (Customer) + request.params.customer;

    return customerApp.createCustomer(customer).then((customer: Customer) => {
        response.json(customer);
    });
});

customerRouter.get('/list', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    return customerApp.listCustomers()
        .then((customers: Customer[]) => {
            response.json(customers);
        });
});

customerRouter.get('/details/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();
    let id: number = +request.params.id;

    return customerApp.readCustomer(id).
        then((customer: Customer) => {
            response.json(customer);
        })
});

customerRouter.put('/update/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let customer: Customer = (Customer) + request.body.customer;

    let teste: string = request.body.customer.toString();
    customer = JSON.parse(teste);

    return response.json(customerApp.updateCustomer(customer));
});

customerRouter.delete('/delete/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let id: number = +request.params.id;

    return response.json(customerApp.deleteCustomer(id));
});


export { customerRouter }