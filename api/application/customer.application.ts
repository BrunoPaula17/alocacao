import { Customer } from '../../app/customer/customer';
import { Professional } from '../../app/professional/professional';
import { CustomerPersistence } from '../persistence/customer.persistence';
import { ProfessionalApplication } from './professional.application';

export class CustomerApplication {

    createCustomer(customer: Customer): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let returnCustomer: Customer;

        customer.deleted = false;

        //insertedCustomer = customerPersistence.create(customer).
        return customerPersistence.create(customer)
            .then((insertedCustomer: Customer) => {
                returnCustomer = insertedCustomer;
                return returnCustomer;
                
                if(insertedCustomer.customerID != null && insertedCustomer.customerID != undefined) {
                    return this.readCustomer(insertedCustomer.customerID);
                }
                else
                {
                    return null;
                }
            })
            .then((readCustomer: Customer) => {
                returnCustomer = readCustomer;=
                return returnCustomer;
            })
    }

    listCustomers(): Promise<Customer[]> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();

        return professionalApp.List()
            .then((professionals: Professional[]) => {
                return customerPersistence.list()
                    .then((customers: Customer[]) => {
                        customers.forEach(customer => {
                            customer.professional = professionals.find(professional => professional.pid == customer.responsible);
                        })
                        return customers;
                    });
            });

    }

    readCustomer(id: number): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();

        let customerReturn: Customer;

        return customerPersistence.read(id)
            .then((customer: Customer) => {
                customerReturn = customer;
                return professionalApp.Read(customer.responsible)
            })
            .then((professional: Professional) => {

                customerReturn.professional = professional;
                return customerReturn;
            });

    }

    updateCustomer(customer: Customer): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let customerUp: Customer;

        return customerPersistence.update(customer)
            .then((customer: Customer) => {
                customerUp = customer;
                return professionalApp.Read(customer.responsible)
            })
            .then((professional: Professional) => {

                customerUp.professional = professional;
                return customerUp;
            });
    }

    deleteCustomer(id: number): Promise<boolean> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let bool: boolean;
        return customerPersistence.delete(id)
            .then((retorno: boolean) => {
                return bool = retorno;
            });

    }

}