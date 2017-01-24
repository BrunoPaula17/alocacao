import { Component, OnInit } from '@angular/core';
import { Professional } from './professional';
import { ProfessionalService } from './professional.service';
import { RoleService} from '../role/role.service';
import { Role } from '../role/role';



@Component({
    selector: 'ava-pro-app',
    templateUrl: './app/professional/professional.html'
})

export class ProfessionalComponent implements OnInit {

    constructor(private _professionalService:ProfessionalService,
                private _roleService: RoleService) {}

    roles: Role[];
    professionals: Professional[];

    getProfessionalsDetails(): void {
        this.professionals.forEach((item) => {
            this.getRoleDetails(item);
        });
    }

    getRoleDetails(professional: Professional): void {
        professional.role = this.roles.find(role => role.roleId == professional.roleID);
    }


    /*
        Inicialização do componente inicial da tela de professional.
    */
    ngOnInit() {

        this._roleService.getRoleList().then((role:Role[]) =>{
            this.roles = role;
            return this._professionalService.getProfessionalList();
        })
        .then((professional: Professional[]) => {
            this.professionals = professional;
            
            this.getProfessionalsDetails();
            
        });

            }

}
