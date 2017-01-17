import { Component } from '@angular/core'
import { Customer } from './customer'

@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent {
    model: Customer = {
            "pageName": "Cliente",
            "customerID": 666,
            "name": "o cão",
            "responsible": 777
        };
}