import { IProfessional } from './professional.interface';
import { Role } from '../role/role';

export class Professional implements IProfessional{
    pid: number;
    eid: string;
    name: string;
    email: string;
    roleID:number;
    prefix: number;
    phone: string;
    role: Role;
    deleted: boolean;
}