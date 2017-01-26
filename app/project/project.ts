import { IProject } from './project.interface'

import { Header } from '../shared/grid/grid-header'
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'


export class Project implements IProject{

    projectId: number;
    customer:  Customer;
    projectName: string;
    startDate: Date;
    endDate: Date;
    sponsor: Professional;
    wbs: string;

}