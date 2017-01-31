import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

    insertProfessional(professional: Professional): void {
        this._professionalService.createProfessional(professional)
                                 .then(professional => this.professional = professional)

    }

    updateProfessional(professional: Professional): void {
        this._professionalService.updateProfessional(professional)
                                 .then(professional => this.professional = professional)
    }

    deleteProfessional(professional: Professional): void {
        this._professionalService.deleteProfessional(professional)
            .then(professional => this.professional = professional)

    }

    goBack():void {
        this._location.back();
    }

    ngOnInit(): void{
        this._router.params.subscribe((params: Params) => {
            
            this.action = params['action'];
            
            if(this.action != 'insert') {
                let pid:number = +params['pid'];
                this.getDetails(pid);
            }
            else{
                 this.professional = new Professional();
            }
        })

        this._roleService.getRoleList()
                         .then(role => this.role = role);
    }

}