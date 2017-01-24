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
    role: Role[];
    action: String;
   
    getDetails(pid:number): void {
        this._professionalService.getProfessionalRead(pid)
                                 .then(professional => this.professional = professional)
    }

    insertProfessional(pid:number,eid:string,name:string,email:string,roleID:number,prefix:number,phone:string): void {
        this._professionalService.createProfessional(pid,eid,name,email,roleID,prefix,phone)
                                 .then(professional => this.professional = professional)

    }

    updateProfessional(pid:number,eid:string,name:string,email:string,roleID:number,prefix:number,phone:string): void {
        this._professionalService.updateProfessional(pid,eid,name,email,roleID,prefix,phone)
                                 .then(professional => this.professional = professional)
    }

    deleteProfessional(pid:number): void {
        this._professionalService.deleteProfessional(pid)
            .then(professional => this.professional = professional)

    }

    goBack():void {
        this._location.back();
    }

    ngOnInit(): void{
        this._router.params.subscribe((params: Params) => {
            let pid:number = +params['pid'];
            this.action = params['action'];
            this.getDetails(pid);

        })

        this._roleService.getRoleList()
                         .then(role => this.role = role);
    }

}