import { ICustomer } from './customer.interface'

export class Customer implements ICustomer{
    customerID: number;
    name: string;
    responsible: number;

}