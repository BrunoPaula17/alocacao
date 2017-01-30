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
        private _professionalService: ProfessionalService,
        private _router: ActivatedRoute,
        private _location: Location) { }

    customer: Customer;
    professionals: Professional[];
    action: string;
    id: number;

    

    // oldgetDetails(id: number): void {
    //     this._customerService.getCustomer(id)
    //         .then((customer: Customer) => {
    //             this.customer = customer;
    //         });
    // }

    // oldupdate(cust: Customer) {
    //     this._customerService.updateCustomer(cust)
    //         .then((customer: Customer) => {
    //             this.customer = customer;
    //         })
    //     this.action = 'details';
    //     alert("update feito");
    // }

    // oldngOnInit(): void {
    //     this._router.params.subscribe((params: Params) => {
    //         let id: number = +params['id'];
    //         this.action = params['action'];

    //         this.getDetails(id); 
    //     })
    // }

    // oldeditar(){
    //     this.action = 'edit';
    //      this._professionalService.getProfessionalList()
    //         .then((professional: Professional[]) => {
    //             this.professionals = professional;
    //     })
        
    // }

    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            if(params['id'] && params['id'] != null && params['id'] != undefined)
                this.id = +params['id'];
            if(params['action'] && params['action'] != null && params['action'] != undefined)
                this.action = params['action']; 
        });

        if((this.id == null || this.id == undefined)){
            this.action = 'create';
            this.customer = new Customer();
        } else {
            this.action = 'details';
            this.getCustomer(this.id);
        }

        this.getProfessionals();
    }

    getProfessionals(){
         this._professionalService.getProfessionalList()
            .then((professional: Professional[]) => {
                this.professionals = professional;
        })
    }

    goBack(): void {
        this._location.back();
    }

    update() {
        this.action = 'update';
    }

    updateCustomer(cust: Customer){
         this._customerService.updateCustomer(cust)
            .then((customer: Customer) => {
                this.customer = customer;
            })
       
        alert("update");
    }

    insertCustomer(cust: Customer){
         this._customerService.createCustomer(cust)
            .then((customer: Customer) => {
                this.customer = customer;
            })
        
        alert("insert");
    }

    getCustomer(id: number): void {
        this._customerService.getCustomer(id)
            .then((customer: Customer) => {
                this.customer = customer;
            });
    }

}