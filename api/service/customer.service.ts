import { Router, Response, Request } from 'express';
import { Customer } from '../../app/customer/customer';
import { CustomerApplication } from '../application/customer.application';

const customerRouter: Router = Router();

customerRouter.post('/create', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let customer: Customer = (Customer) + request.body.customer;

    let teste: string = request.body.customer.toString();   
    customer = JSON.parse(teste);

    customerApp.createCustomer(customer)
        .then((returnCustomer: Customer) => {
            response.json(returnCustomer);
        })
});

customerRouter.get('/list', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    customerApp.listCustomers()
        .then((customers: Customer[]) => {
            response.json(customers);
        });

});

customerRouter.get('/details/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();
    let id: number = +request.params.id;

    customerApp.readCustomer(id).
        then((customer: Customer) => {
            response.json(customer);
        })
});

customerRouter.put('/update/:id', (request: Request, response: Response) => {
    let customerApp: CustomerApplication = new CustomerApplication();

    let customer: Customer = (Customer) + request.body.customer;

    let teste: string = request.body.customer.toString();
    customer = JSON.parse(teste);

    customerApp.updateCustomer(customer)
        .then((customerUp: Customer) => {
            response.json(customerUp)
        })

});

customerRouter.delete('/delete/:id', (request: Request, response: Response) => {

    let customerApp: CustomerApplication = new CustomerApplication();
    let id: number = +request.params.id;

    customerApp.deleteCustomer(id)
        .then((bool: boolean) => {
            response.json(bool);
        });

});


export { customerRouter }