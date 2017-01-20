import { Component, Input } from "@angular/core";
import { Professional } from "./professional";
import { Role } from "../role/role"

@Component({
    moduleId: module.id,
    selector: 'ava-pro-dtl-app',
    templateUrl: 'professional-detail.html' 
})

export class ProfessionalDetailComponent {
    @Input() professional: Professional[];
    @Input() role: Role[];
}