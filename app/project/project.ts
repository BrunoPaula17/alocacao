import { ProjectInterface } from './project.interface' 

export class Project implements ProjectInterface{
    projectID: number;
    clientId: number;
    startEnd: Date;
    endDate: Date;
    concludeDate: Date;
    sponsor: number;
    name: string;
    wbs: string;
}