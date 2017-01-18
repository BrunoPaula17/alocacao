import { Component } from '@angular/core';
import { Role } from './role';

@Component({
    selector: 'ava-rol-app',
    templateUrl: './app/role/role.html'
})
export class RoleComponent {
    model: Role = {
        "pageName":"Cargos",
        "roleId": 5,
        "name": "Senior System Analyst",
        "brc": "2017SSA",
        "level": 8,
        "description":"Senior software development"
    };
}