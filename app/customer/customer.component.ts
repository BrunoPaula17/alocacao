import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from '../customer/customer.service'

import { Professional } from '../professional/professional'

import { SharedModule } from '../shared/shared.module';

@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent implements OnInit {
    constructor(
        private _customerService: CustomerService) {

    }
    customers: Customer[];
    pageName: string = "Clientes";


    ngOnInit() {
        this._customerService.getCustomerList()
            .then((customer: Customer[]) => {
                this.customers = customer;
            })
    }

}   