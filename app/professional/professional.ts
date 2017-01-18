import { ProfessionalInterface } from './professional.interface'

export class Professional implements ProfessionalInterface{
    pageName: string;
    pid: number;
    eid: string;
    name: string;
    email: string;
    roleID:number;
    prefix: number;
    phone: number
}