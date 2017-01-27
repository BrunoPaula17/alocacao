import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { Customer } from './customer';
import { CustomerService } from '../customer/customer.service';
import { Professional } from '../professional/professional';

import { ProfessionalService } from "../professional/professional.service"

@Component({
    moduleId: module.id,
    selector: 'ava-cust-dtl-app',
    templateUrl: 'customer-details.html'
})

export class CustomerDetailsComponent implements OnInit {
    constructor(private _customerService: CustomerService,
        private _professionalService: ProfessionalService,
        private _router: ActivatedRoute,
        private _location: Location) { }

    customer: Customer;
    professionals: Professional[];
    action: string;

    goBack(): void {
        this._location.back();
    }

    getDetails(id: number): void {
        this._customerService.getCustomer(id)
            .then((customer: Customer) => {
                this.customer = customer;
            });
    }

    update(cust: Customer) {
        this._customerService.updateCustomer(cust)
            .then((customer: Customer) => {
                this.customer = customer;
            })
        this.action = 'details';
    }

    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.action = params['action'];
            this.getDetails(id);
        })
    }

    editar(){
        this.action = 'edit';
    }

}