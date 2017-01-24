import { Component, OnInit } from '@angular/core';
import { Professional } from './professional';
import { Role } from '../role/role';
import { ROLES } from '../shared/mock';
import { ProfessionalService } from "./professional.service"

@Component({
    selector: 'ava-pro-app',
    templateUrl: './app/professional/professional.html'
})

export class ProfessionalComponent implements OnInit {
    constructor(private _professionalService:ProfessionalService) {}

    roles: Role[] = ROLES;
    professionals: Professional[];

    getRoleDetail(professional: Professional): void {
        professional.role = this.roles.find(role => role.roleId == professional.roleID)
    }

    /*
        Inicialização do componente inicial da tela de professional.
    */
    ngOnInit() {
        this._professionalService.getProfessionalList()
                                 .then((professional:Professional[])=>{
                                        this.professionals = professional;
                                        this.professionals.forEach((item,index)=>{
                                           this.getRoleDetail(item);
                                        });
                                 });
    }

}
