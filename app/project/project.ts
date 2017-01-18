import { IProject } from './project.interface' 

export class Project implements IProject{
    constructor(){

    }
    projectID: number;
    clientID: number;
    startDate: Date;
    endDate: Date;
    concludeDate: Date;
    sponsor: number;
    name: string;
    wbs: string;
}