import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Customer } from './Customer';

const SERVICE_URL: string = '/api/customer'

@Injectable () export class CustomerService{
    constructor(private _httpService: Http) {}
    
    // getCustomerList() : Promise<Customer[]>{
    //     return Promise.resolve(CUSTOMERS);
    // }

    getCustomerList() : Promise<Customer[]>{
        let url: string = `${SERVICE_URL}/list`;
        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Customer[];
            })
            .catch(this.errorHandling);
     
     }

    // getCustomer(id:number) : Promise<Customer>{
    //     return Promise.resolve(CUSTOMERS.find(customer => customer.customerID === id));
    // }

    getCustomer(id:number) : Promise<Customer>{
         let url: string = `${SERVICE_URL}/${id}`;

         return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Customer
            })
            .catch(this.errorHandling);
    }

    errorHandling(error: any) {
        console.log(error.message || error);
    }

    createCustomer(customer: Customer) : void{
        let url: string = `${SERVICE_URL}`;
        this._httpService.post(url, customer).toPromise().then((response: Response) => {
            return response.json() as Customer
        })
        .catch(this.errorHandling);
    } 

    updateCustomer(customer: Customer): void{
         let url: string = `${SERVICE_URL}`;
        this._httpService.put(url, customer).toPromise().then((response: Response) => {
            return response.json() as Customer
        })
        .catch(this.errorHandling);
    }
}


