import { IRole } from './role.interface';

export class Role implements IRole {
    roleId: number;
    name: string;
    brc: string;
    level: number;
    description: string;
    deleted: boolean;
}