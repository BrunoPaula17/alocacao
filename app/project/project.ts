import { IProject } from './project.interface'

import { Header } from '../shared/grid/grid-header'
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'


export class Project implements IProject{

    projectId: number;
    customerID: number;
    customer:  Customer;
    projectName: string;
    startDate: Date;
    endDate: Date;
    pid: number;
    sponsor: Professional;
    wbs: string;
    deleted: boolean;

}