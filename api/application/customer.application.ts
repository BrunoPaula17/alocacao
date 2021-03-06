import { Customer } from '../../app/customer/customer';
import { Professional } from '../../app/professional/professional';
import { CustomerPersistence } from '../persistence/customer.persistence';
import { ProfessionalApplication } from './professional.application';

export class CustomerApplication {

    /* Insere um novo cliente. */
    createCustomer(customer: Customer): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let returnCustomer: Customer;

        customer.deleted = false;

        //insertedCustomer = customerPersistence.create(customer).
        return customerPersistence.create(customer)
            .then((insertedCustomer: Customer) => {
                returnCustomer = insertedCustomer;
                             
                if(insertedCustomer.customerID != null && insertedCustomer.customerID != undefined) {
                    return  professionalApp.read(returnCustomer.responsible);
                }
                else
                {
                    return null;
                }
            })
            .then((professional: Professional) => {
                returnCustomer.professional = professional;
                return returnCustomer;
            })
    }

    /* Retorna uma lista com todos os clientes. */

    listCustomers(): Promise<Customer[]> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();

        return professionalApp.list()
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

        /* Retorna o cliente de acordo com o id. */

    readCustomer(id: number): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();

        let customerReturn: Customer;

        return customerPersistence.read(id)
            .then((customer: Customer) => {
                customerReturn = customer;
                return professionalApp.read(customer.responsible)
            })
            .then((professional: Professional) => {

                customerReturn.professional = professional;
                return customerReturn;
            });

    }

        /* Atualiza as informações do cliente. */

    updateCustomer(customer: Customer): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let customerUp: Customer;

        return customerPersistence.update(customer)
            .then((customer: Customer) => {
                customerUp = customer;
                return professionalApp.read(customer.responsible)
            })
            .then((professional: Professional) => {

                customerUp.professional = professional;
                return customerUp;
            });
    }

        /* Delete lógico do cliente pelo id. */

    deleteCustomer(id: number): Promise<boolean> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let bool: boolean;
        return customerPersistence.delete(id)
            .then((retorno: boolean) => {
                return bool = retorno;
            });

    }

}