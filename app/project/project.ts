import { IProject } from './project.interface'

import { Header } from '../shared/header.grid'
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'


export class Project implements IProject{
    constructor(){
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

    static Headers: Header[] = [
        {field: 'clientId', description:'Cliente', filter: 'text'},
        {field: 'name', description:'Nome', filter: 'text'},
        {field: 'wbs', description:'WBS', filter: 'text'},
        {field: 'sponsor', description:'Responsável', filter: 'text'},
        {field: 'startDate', description:'Dt. Inicio', filter: 'date'},
        {field: 'endDate', description:'Dt. Fim', filter: 'date'},
        {field: 'concludeDate', description:'Dt. Conclusão', filter: 'date'}
    ];
}