import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS, PROFESSIONALS } from '../shared/mock';
import { Professional } from '../professional/professional'

@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent implements OnInit{
    customers: Customer[] = CUSTOMERS;
    pageName: string = "Cliente";
    currentCustomer : Customer; 
    professionals: Professional[] = PROFESSIONALS;

    getProfessional(): void{

        this.customers.forEach(customer => {
            customer.professional = this.professionals.find(professional => professional.pid == customer.responsible);
            console.log(customer);
        });
        
    }
    
   OnLineClick(customer:Customer) : void
   {
       this.currentCustomer = customer;
   }

   ngOnInit() {
        this.getProfessional();
    }

  

   
}   