
import { Customer } from '../customer/customer' 
import { Professional } from '../professional/professional' 


export interface IProject{
    projectId: number;
    customerID: number;
    customer:  Customer;
    projectName: string;
    startDate: Date;
    endDate: Date;
    pid: Number;
    sponsor:  Professional;
    wbs: string;
    deleted: boolean;
}