import { IProfessional } from './professional.interface'

export class Professional implements IProfessional{
    pid: number;
    eid: string;
    name: string;
    email: string;
    roleID:number;
    prefix: number;
    phone: number
}