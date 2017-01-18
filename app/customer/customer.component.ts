import { Component } from '@angular/core'
import { Customer } from './customer'

@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent {
    pageName: string = "Cliente";

    model: Customer = {
            "customerID": 666,
            "name": "o cão",
            "responsible": 777
        };
}

export const CUSTOMERS: Customer[] = [    {
        "customerID": 1,
        "name": "Santander",
        "responsible": 10775951
    },

    {
        "customerID": 2,
        "name": "Itaú",
        "responsible": 10775951
    },

    {
        "customerID": 3,
        "name": "Safra",
        "responsible": 10775951
    }];