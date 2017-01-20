import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from '../customer/customer.service';

import { Professional } from '../professional/professional'
import { CUSTOMERS, PROFESSIONALS } from '../shared/mock';



@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent implements OnInit{
    constructor(private _customerService: CustomerService){

    }

    customers: Customer[] = CUSTOMERS;
    pageName: string = "Cliente";
    currentCustomer : Customer; 
    professionals: Professional[] = PROFESSIONALS;

    getProfessional(): void{

        this.customers.forEach(customer => {
            customer.professional = this.professionals.find(professional => professional.pid == customer.responsible);
        });
        
    }
    
    ngOnInit() {
        this.getProfessional();
    }

  

   
}   