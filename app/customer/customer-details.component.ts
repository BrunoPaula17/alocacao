import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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
        private _router: ActivatedRoute,
        private _location: Location) { }

    customer:Customer;
    professionals: Professional[];
    action: string;

    goBack():void {
        this._location.back();
    }

     getDetails(id: number): void {
   
         this._customerService.getCustomer(id)
            .then((customer: Customer) => {
                this.customer = customer;
            })
    }

    update(customer: Customer){
        this._customerService.updateCustomer(customer)
        .then((customer: Customer) => {
            this.customer = customer;
        })
    }

    ngOnInit(): void {
          this._router.params.subscribe((params: Params) => {
              let id: number = +params['id'];
              this.action = params['action'];
              this.getDetails(id);
          })
       
    }
}
