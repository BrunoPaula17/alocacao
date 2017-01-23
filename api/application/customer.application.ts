import { Customer } from '../../app/customer/customer';
import { Professional } from '../../app/professional/professional';
import { CustomerPersistence } from '../persistence/customer.persistence';
import { ProfessionalApplication } from './professional.application';

export class CustomerApplication{

    createCustomer(customer: Customer): Customer{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();

        return customerPersistence.Create(customer);
    }
    
    listCustomers(): Customer[]{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let costumers: Customer[];
        let professionals: Professional[];

        costumers       = customerPersistence.List();
        professionals   = professionalApp.getProfessionals();

        costumers.forEach(customer =>{
            customer.professional = professionals.find(professional => professional.pid == customer.responsible);
        })

        return costumers;
    }

    readCustomer(id: number): Customer{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();
        let costumer: Customer;
        let professional: Professional

        costumer = customerPersistence.Read(id);
        costumer.professional = professionalApp.getProfessional(costumer.responsible);

        return costumer;
    }

    updateCustomer(customer: Customer): Customer{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        
        return customerPersistence.Update(customer);
    }

    deleteCustomer(id: number): boolean{
        let customerPersistence: CustomerPersistence = new CustomerPersistence();
        return customerPersistence.Delete(id);
    }
}