import { Component } from '@angular/core';
import { Professional } from './professional';
import { Role } from '../role/role';
import { PROFESSIONALS, ROLES } from '../shared/mock';

@Component({
    selector: 'ava-pro-app',
    templateUrl: './app/professional/professional.html'
})

export class ProfessionalComponent {
    professionals: Professional[] = PROFESSIONALS;
    roles: Role[] = ROLES;
    pageName:string = "Profissional";
    currentProfessional: Professional;



getRoleDetail(professional: Professional): void {
    professional.role = this.roles.find(role => role.roleId == professional.roleID)
}

ngOnInit() {
    this.professionals.forEach((item,index)=>{
        this.getRoleDetail(item);
    });
}

getDetails(pro: Professional){
    console.log(pro);
    this.currentProfessional = pro;
    console.log(this.currentProfessional);
    
}

}
