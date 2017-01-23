import { Customer } from '../../app/customer/customer';
import { CustomerPersistence } from '../persistence/customer.persistence';

export class CustomerApplication{
    getCustomers(): Customer[]{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();

        return customerPersistence.getCustomers();
    }

    getCustomer(id: number): Customer{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();

        return  customerPersistence.getCustomer(id);
    }
}