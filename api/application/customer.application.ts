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

        return professionalApp.List()
            .then((professionals: Professional[]) => {
                return customerPersistence.list()
                    .then((costumers: Customer[]) => {
                        costumers.forEach(customer => {
                            customer.professional = professionals.find(professional => professional.pid == customer.responsible);
                        })
                        return costumers;
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
            });;

    }

    updateCustomer(customer: Customer): Promise<Customer> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let customerUp: Customer;
        return customerPersistence.update(customer)
            .then((customer: Customer) => {
                return customerUp = customer;
            });
    }

    deleteCustomer(id: number): Promise<boolean> {
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let bool: boolean;
        return customerPersistence.delete(id)
        .then((retorno :boolean) => {
            return bool = retorno;
        });

    }

}