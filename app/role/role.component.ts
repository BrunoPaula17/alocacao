import { Component } from '@angular/core';
import { Role } from './role';
import { ROLES } from '../shared/mock';

@Component({
    selector: 'ava-rol-app',
    templateUrl: './app/role/role.html'
})
export class RoleComponent {
    roles: Role[] = ROLES;
    currentRole: Role;

    pageName: string = "Cargos";

    model: Role = {
        "roleId": 5,
        "name": "Senior System Analyst",
        "brc": "2017SSA",
        "level": 8,
        "description": "Senior software development"
    };

    OnRolesClick(role: Role): void {
        this.currentRole = role;
    }
}