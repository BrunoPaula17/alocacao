import { Customer } from '../../app/customer/customer';
import { Professional } from '../../app/professional/professional';
import { CustomerPersistence } from '../persistence/customer.persistence';
import { ProfessionalApplication } from './professional.application';

export class CustomerApplication{

    getCustomers(): Customer[]{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let costumers: Customer[];
        let professionals: Professional[];

        costumers       = customerPersistence.getCustomers();
        professionals   = professionalApp.getProfessionals();

        costumers.forEach(customer =>{
            customer.professional = professionals.find(professional => professional.pid == customer.responsible);
        })

        return costumers;
    }

    getCustomer(id: number): Customer{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let costumer: Customer;

        costumer = customerPersistence.getCustomer(id);
        return costumer;
    }
}