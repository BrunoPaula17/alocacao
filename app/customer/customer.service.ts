import { Injectable } from '@angular/core';
import { Customer } from './Customer';
import { CUSTOMERS } from '../shared/mock';

@Injectable () export class CustomerService
{
    getCustomerList() : Promise<Customer[]>
    {
        return Promise.resolve(CUSTOMERS);
    }
}


