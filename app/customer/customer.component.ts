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