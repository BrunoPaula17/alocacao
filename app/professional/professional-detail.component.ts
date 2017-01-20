import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Professional } from "./professional";
import { ProfessionalService} from "./professional.service";

import { RoleService} from "../role/role.service";
import { Role } from "../role/role"

@Component({
    moduleId: module.id,
    selector: 'ava-pro-dtl-app',
    templateUrl: 'professional-detail.html' 
})

export class ProfessionalDetailComponent implements OnInit {


    constructor(private _professionalService:ProfessionalService,
                private _roleService:RoleService,
                private _router:ActivatedRoute,
                private _location: Location){}

    professional: Professional;
    @Input() roles: Role[];
   
    getDetail(id:number): void {
        this._professionalService.getProfessional(id)
            .then(professional => this.professional = professional)
    }

    goBack():void {
        this._location.back();
    }

    ngOnInit(): void{
        this._router.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.getDetail(id);
        })

        this._roleService.getRoleList()
                         .then(role => this.roles = role);
    }

}