import { ICustomer } from './customer.interface'
import { Professional } from '../professional/professional';

export class Customer implements ICustomer{
    customerID: number;
    name: string;
    responsible: number;
    professional: Professional;
    contact: string;
    email: string;
    deleted: boolean;
}
