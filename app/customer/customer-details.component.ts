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
        private _professionalService:ProfessionalService,
        private _router: ActivatedRoute,
        private _location: Location) { }

    customer:Customer;
    professionals: Professional[];


    goBack():void {
        this._location.back();
    }

    getProfessional(): void{

        this.customer.professional = this.professionals.find(professional => professional.pid == this.customer.responsible);
        
    }

    getDetails(id: number): void {
         this._professionalService.getProfessionalList()
            .then ((professional: Professional[]) => {
                this.professionals = professional;
            })
            .then (() => {
                this._customerService.getCustomer(id)
                    .then((customer : Customer) => {
                        this.customer = customer;
                    })
            })
            .then(() => {
                this.getProfessional();
            })


        // this._customerService.getCustomer(id)
        //     .then(customer => this.customer = customer);

        // this.getProfessional();
    }

    ngOnInit(): void {
         this._router.params.subscribe((params: Params) => {
             let id: number = +params['id'];
             this.getDetails(id);
         })
        // this._professionalService.getProfessionalList().then((professional:Professional[])=>{
        //     this.professionals = professional;
        //     //this.professionals.forEach((item,index)=>{
        //     //    this.getRoleDetail(item);
        //     //});
        // });

       
    }
}
