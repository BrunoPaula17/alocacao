import { ProfessionalInterface } from './professional.interface'

export class Professional implements ProfessionalInterface{
    PID: number;
    EID: string;
    Name: string;
    Email: string;
    RoleID:number;
    Prefix: number;
    Phone: number
}