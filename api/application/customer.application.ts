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

        costumers       = customerPersistence.List();
        professionals   = professionalApp.List();

        costumers.forEach(customer =>{
            customer.professional = professionals.find(professional => professional.pid == customer.responsible);
        })

        return costumers;
    }

    getCustomer(id: number): Customer{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let costumer: Customer;
        let professional: Professional

        costumer = customerPersistence.Read(id);
        costumer.professional = professionalApp.Read(costumer.responsible);

        return costumer;
    }
}