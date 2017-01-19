import { Injectable } from '@angular/core';
import { Role } from './role';
import { ROLES } from '../shared/mock';

@Injectable()
export class RoleService{
    getRoleList(): Promise<Role[]>{
        return Promise.resolve(ROLES);
    }
}