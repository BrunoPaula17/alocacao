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

        return customerPersistence.list();
    }

    readCustomer(id: number): Customer {
        return null;
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