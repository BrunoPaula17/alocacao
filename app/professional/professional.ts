import { ProfessionalInterface } from './professional.interface'

export class Professional implements ProfessionalInterface{
    PID: number;
    EID: string;
    Name: string;
    Email: string;
    Role:string;
    Prefix: number;
    Phone: number
}