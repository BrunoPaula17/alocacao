import { Customer } from '../../app/customer/customer';
import { Professional } from '../../app/professional/professional';
import { CustomerPersistence } from '../persistence/customer.persistence';
import { ProfessionalApplication } from './professional.application';

export class CustomerApplication {

    createCustomer(customer: Customer): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();

        return customerPersistence.create(customer);
    }

    listCustomers(): Promise<Customer[]> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let professionals: Professional[];

        professionals = professionalApp.List();

        return Promise.resolve(customerPersistence.list()
            .then((costumers: Customer[]) => {
                costumers.forEach(customer => {
                    customer.professional = professionals.find(professional => professional.pid == customer.responsible);
                })
                return costumers;
            }));

        // costumers       = customerPersistence.List();
        // professionals   = professionalApp.List();

        // costumers.forEach(customer =>{
        //     customer.professional = professionals.find(professional => professional.pid == customer.responsible);
        // })

        // return costumers;
    }

    readCustomer(id: number): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let professional: Professional

        return Promise.resolve(customerPersistence.read(id)
            .then((costumer: Customer) => {
                costumer.professional = professionalApp.Read(costumer.responsible);
                return costumer;
            }));

        // let customerPersistence: CustomerPersistence = new CustomerPersistence();
        // let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        // let costumer: Customer;
        // let professional: Professional

        // costumer = customerPersistence.Read(id);
        // costumer.professional = professionalApp.Read(costumer.responsible);

        // return costumer;
    }

    updateCustomer(customer: Customer): Customer {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();

        return null; //customerPersistence.update(customer);
    }

    deleteCustomer(id: number): boolean {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        return null; //customerPersistence.delete(id);
    }
}