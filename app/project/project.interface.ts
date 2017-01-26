
import { Customer } from '../customer/customer' 
import { Professional } from '../professional/professional' 


export interface IProject{
    projectID: number;
    client:  Customer;
    startDate: Date;
    endDate: Date;
    concludeDate: Date;
    sponsor:  Professional;
    name: string;
    wbs: string;
    deleted: boolean;
}