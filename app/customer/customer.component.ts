import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS, PROFESSIONALS } from '../shared/mock';
import { Professional } from '../professional/professional'
import { CustomerService } from './customer.service';

@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent implements OnInit {
    constructor(private _customerService: CustomerService) {
    }

    customers: Customer[];
    pageName: string = "Cliente";
    currentCustomer : Customer; 
    professionals: Professional[] = PROFESSIONALS;

    getProfessional(customer: Customer): void {
        customer.professional = this.professionals.find(professional => professional.pid == customer.responsible);
    }
      OnLineClick(customer: Customer): void {
        this.currentCustomer = customer;
    }

    ngOnInit() {

        this._customerService.getCustomerList()
            .then(customers => this.customers = customers)
            .then(() => {
                this.customers.forEach((item, index) => {
                    this.getProfessional(item);
                });
            }
            );
    
  
  

   
    }
}  