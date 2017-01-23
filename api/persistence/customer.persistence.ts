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
            "email": "roseli@santander.com.br",
            "deleted": false
        },

        {
            "customerID": 2,
            "name": "Itaú",
            "responsible": 10715378,
            "professional": null,
            "contact": "João",
            "email": "joao@itau.com.br",
            "deleted": false
        },

        {
            "customerID": 3,
            "name": "Safra",
            "responsible": 10715376,
            "professional": null,
            "contact": "Gabriel",
            "email": "gabriel@safra.com.br",
            "deleted": true
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
        let _customers: Customer[];
        //_customers = this.customers;

        this.customers.forEach(customer => {
            if(customer.deleted === false)
            {
                _customers.push(customer);
            }
        })

        return _customers;
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
         let _customer: Customer;
         let retBool: boolean;

         _customer = this.customers.find(customer => customer.customerID === id);

         if(_customer != null)
         {
             _customer.deleted = true;
             retBool = true;
         }
 
        return retBool;    
    }

}