import { CustomerInterface } from './customer.interface'

export class Customer implements CustomerInterface{
    pageName: string;
    customerID: number;
    name: string;
    responsible: number;

}