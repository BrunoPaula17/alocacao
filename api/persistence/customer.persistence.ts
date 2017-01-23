import { Customer } from '../../app/customer/customer';
import { ICrud } from './crud.interface';

export class CustomerPersistence implements ICrud<Customer>{
    
    private customers: Customer[] = [
        {
            "customerID": 1,
            "name": "Santander",
            "responsible": 10715377,
            "professional": null,
            "contact": "Roseli",
            "email": "roseli@santander.com.br"
        },

        {
            "customerID": 2,
            "name": "Itaú",
            "responsible": 10715378,
            "professional": null,
            "contact": "João",
            "email": "joao@itau.com.br"
        },

        {
            "customerID": 3,
            "name": "Safra",
            "responsible": 10715376,
            "professional": null,
            "contact": "Gabriel",
            "email": "gabriel@safra.com.br"
        }
    ];

    getCustomers(): Customer[] {
        return this.customers;
    }

    getCustomer(id: number): Customer {
        return this.customers.find(customer => customer.customerID === id);
    }

    Create(customer: Customer): Customer{
        return null;
    }
    
    List(): Customer[]{
        return this.customers;
    }
    
    Read(id: number): Customer{
        return this.customers.find(customer => customer.customerID === id);
    }
    
    Update(custUpd: Customer): Customer{
      
       let customer: Customer = this.Read(custUpd.customerID);
       customer = custUpd;
       return customer;

    }
    
    Delete(id: number): boolean{
        return null;
        
    }

}