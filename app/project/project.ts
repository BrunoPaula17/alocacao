import { IProject } from './project.interface'

import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'


export class Project implements IProject {
    constructor() {
        this.wbs = "teste";
    }
    projectID: number;
    clientID: number;
    client: Customer;
    startDate: Date;
    endDate: Date;
    concludeDate: Date;
    sponsorID: number;
    sponsor: Professional;
    name: string;
    wbs: string;
}