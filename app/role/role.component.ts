import { Component, OnInit } from '@angular/core';

import { Role } from './role';

import { RoleService } from './role.service';

@Component({
    selector: 'ava-rol-app',
    templateUrl: './app/role/role.html'
})
export class RoleComponent implements OnInit {
    constructor(private _roleService: RoleService) {
   
    }

    roles: Role[];
    currentRole: Role;

    ngOnInit(): void {
        this._roleService.getRoleList().
            then(roles => this.roles = roles);
    }

    OnRolesClick(role: Role): void {
        this.currentRole = role;
    }
}