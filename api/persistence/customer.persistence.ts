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

    Create(customer: Customer): Customer {
        let custID: number = 1;

        let lastCustomer: Customer;
        this.customers.indexOf(lastCustomer, this.customers.length - 1)

        if (lastCustomer != null) {
            custID = lastCustomer.customerID + 1;
        }

        customer.customerID = custID;

        this.customers.push(customer);

        return customer;
    }

    List(): Customer[] {
        let _customers: Customer[] = new Array<Customer>();
        //_customers = this.customers;

        this.customers.forEach(customer => {
            if (customer.deleted === false) {
                _customers.push(customer);
            }
        })

        return _customers;
    }

    Read(id: number): Customer {
        return this.customers.find(customer => customer.customerID === id && customer.deleted === false);
    }
    Update(custUpd: Customer): Customer {

        let _customer: Customer;
  
        _customer = this.customers.find(customer => customer.customerID === custUpd.customerID);

        if(_customer != null){
            this.customers[this.customers.indexOf(_customer)].contact = _customer.contact;
        }
        else{
            _customer = null;     
        }

        return _customer;
    }

    Delete(id: number): boolean {
        let _customer: Customer;
        let retBool: boolean;

        _customer = this.customers.find(customer => customer.customerID === id);

        if (_customer != null) {
            _customer.deleted = true;
            retBool = true;
        }

        return retBool;
    }

}