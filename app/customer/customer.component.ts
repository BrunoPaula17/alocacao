import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from '../customer/customer.service'

import { Professional } from '../professional/professional'
import { CUSTOMERS, PROFESSIONALS } from '../shared/mock';

import { SharedModule } from '../shared/shared.module';

import { ProfessionalService } from "../professional/professional.service"

@Component({
    selector: 'ava-cust-app',
    templateUrl: './app/customer/customer.html'
})
export class CustomerComponent implements OnInit {
    constructor(
        private _customerService: CustomerService,
        private _professionalService: ProfessionalService) {

    }
    //customers: Customer[] = CUSTOMERS;
    customers: Customer[];
    pageName: string = "Clientes";
    currentCustomer: Customer;
    //professionals: Professional[] = PROFESSIONALS;
    professionals: Professional[];

    getProfessional(): void {
        this.customers.forEach(customer => {
            customer.professional = this.professionals.find(professional => professional.pid == customer.responsible);
        });

    }

    ngOnInit() {
        this._professionalService.getProfessionalList()
            .then((professional: Professional[]) => {
                this.professionals = professional;
            })
            .then(() => {
                this._customerService.getCustomerList()
                .then((customer: Customer[]) => {
                    this.customers = customer;
                })
            })
            .then(() => {
                this.getProfessional()
            });
    }

}   