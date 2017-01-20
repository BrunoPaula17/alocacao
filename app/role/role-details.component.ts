import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Role } from './role';
import { RoleService } from './role.service';

import { SharedModule } from '../shared/shared.module';

@Component({
    moduleId: module.id,
    selector: 'ava-rol-dtl-app',
    templateUrl: 'role-details.html'
})
export class RoleDetailComponent implements OnInit {
    constructor(private _roleService: RoleService,
            private _route: ActivatedRoute,
            private _location: Location
    ) { }

    @Input() role: Role;
    levels: number[] = [6, 7, 8, 9, 10, 11, 12];

    getRoleDetails(id: number) : void{
        this._roleService.getRoleId(id)
            .then(role => this.role = role);
    }

    goBack(){
        this._location.back();
    }

    ngOnInit(): void {
        this._route.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.getRoleDetails(id);
        })

    }
}
