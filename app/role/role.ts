import { RoleInterface } from './role.interface'

export class Role implements RoleInterface {
    pageName: string;
    roleId: number;
    name: string;
    brc: string;
    level: number;
}