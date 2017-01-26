
import { Customer } from '../customer/customer' 
import { Professional } from '../professional/professional' 


export interface IProject{
    projectId: number;
    customer:  Customer;
    projectName: string;
    startDate: Date;
    endDate: Date;
    sponsor:  Professional;
    wbs: string;
}