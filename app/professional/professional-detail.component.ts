import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
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
                private _router:ActivatedRoute){}

    professional: Professional;
    @Input() role: Role[];
   
    getDetail(id:number): void {
        this._professionalService.getProfessional(id)
            .then(professional => this.professional = professional)
    }

    ngOnInit(): void{
        this._router.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.getDetail(id);
        })

        //this._roleService.getRoles()
        //                 .then(role => this.role = role);
    }

}