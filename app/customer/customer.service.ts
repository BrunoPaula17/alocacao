import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import { Customer } from './Customer';

const SERVICE_URL: string = '/api/customer'
const HEADERS: Headers = new Headers({
    'Content-Type': 'application/json'
});

@Injectable() export class CustomerService {
    constructor(private _httpService: Http) { }

    getCustomerList(): Promise<Customer[]> {
        let url: string = `${SERVICE_URL}/list`;
        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Customer[];
            })
            .catch(this.errorHandling);

    }

    getCustomer(id: number): Promise<Customer> {
        let url: string = `${SERVICE_URL}/details/${id}`;

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

    createCustomer(customer: Customer): Promise<Customer> {
        let url: string = `${SERVICE_URL}/create`;

        return this._httpService.post(url, { 'customer': JSON.stringify(customer)}, HEADERS)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Customer
            })
            .catch(this.errorHandling);
    }

    updateCustomer(customer: Customer): Promise<Customer> {
        let url: string = `${SERVICE_URL}/update/${customer.customerID}`;
        console.log(JSON.stringify(customer));

        return this._httpService.put(url, { 'customer': JSON.stringify(customer)}, HEADERS)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Customer
            })
            .catch(this.errorHandling);
    }

    erroHandling(error: any) { console.log(error.message || error); }
}


