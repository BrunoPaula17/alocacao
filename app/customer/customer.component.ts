import { Component } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from '../shared/mock';

@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent {
    customers: Customer[] = CUSTOMERS;
    pageName: string = "Cliente";
    currentCustomer : Customer; 

   OnLineClick(customer:Customer) : void
   {
       this.currentCustomer = customer;
   }

   
}   