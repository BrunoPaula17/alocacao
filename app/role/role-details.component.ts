import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Role } from './role';
import { RoleService } from './role.service';

import { SharedModule } from '../shared/shared.module';

//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';  

@Component({
    moduleId: module.id,
    selector: 'ava-rol-dtl-app',
    templateUrl: 'role-details.html'
})
export class RoleDetailComponent implements OnInit {
    constructor(private _roleService: RoleService,
        private _route: ActivatedRoute,
        private _location: Location,
        //private _modalService: NgbModal
    ) { }

    @Input() role: Role;
    action: string;
    levels: number[] = [6, 7, 8, 9, 10, 11, 12];

    getRoleDetails(id: number): void {
        this._roleService.getRoleId(id)
            .then(role => this.role = role);
    }

    back() {
        this._location.back();
    }

    save() {
        if (this.action === 'edit')
            this._roleService.updateRole(this.role)
                .then((roleSaved: Role) => {
                    this.role = roleSaved;
                    this.action = 'read';
                });
        else
            this._roleService.createRole(this.role)
                .then((roleSaved: Role) => {
                    this.role = roleSaved;
                    this.action = 'read';
                });
    }

    edit() { this.action = 'edit'; }

    delete() {
        this._roleService.deleteRole(this.role.roleId)
            .then((roleSaved: Role) => {
                this.role = roleSaved;
            });
    }

    ngOnInit(): void {
        this._route.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.action = params['action'];

            this.role = new Role();
            if (this.action != 'create')
                this.getRoleDetails(id);
        })

    }
}
