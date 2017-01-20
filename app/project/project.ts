import { IProject } from './project.interface'

import { Header } from '../shared/grid/grid-header'
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
        {field: 'client.name', description:'Cliente', filter: 'text', class: 'text-left', insert: false, update: true, delete: true},
        {field: 'name', description:'Nome', filter: 'text', class: 'text-center', insert: false, update: true, delete: true},
        {field: 'wbs', description:'WBS', filter: 'text', class: 'text-center', insert: false, update: true, delete: true},
        {field: 'sponsor.name', description:'Responsável', filter: 'text', class: 'text-center', insert: false, update: true, delete: true},
        {field: 'startDate', description:'Dt. Inicio', filter: 'date', class: 'text-center', insert: false, update: true, delete: true},
        {field: 'endDate', description:'Dt. Fim', filter: 'date', class: 'text-center', insert: false, update: true, delete: true},
        {field: 'concludeDate', description:'Dt. Conclusão', filter: 'date', class: 'text-center', insert: false, update: true, delete: true},
        {field: 'projectID', description:'Ações', filter: 'button', class: 'text-center', insert: false, update: true, delete: true},
    ];

}