import { Component } from '@angular/core';
import { Professional } from './professional';
import { Role } from '../role/role';
import { PROFESSIONALS, ROLES } from '../shared/mock';
import { ProfessionalService } from "./professional.service"

@Component({
    selector: 'ava-pro-app',
    templateUrl: './app/professional/professional.html'
})

export class ProfessionalComponent {
    constructor(private _professionalService:ProfessionalService)
    {

    }

    professionals: Professional[] = PROFESSIONALS;
    roles: Role[] = ROLES;
    currentProfessional: Professional;

    getRoleDetail(professional: Professional): void {
        professional.role = this.roles.find(role => role.roleId == professional.roleID)
    }

    ngOnInit() {
        this._professionalService.getProfessionalList().then((professional:Professional[])=>{
            this.professionals = professional;
            this.professionals.forEach((item,index)=>{
                this.getRoleDetail(item);
            });
        });

    }

    getDetails(pro: Professional){
        this.currentProfessional = pro;
    }

}
