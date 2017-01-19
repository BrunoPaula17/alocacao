import { Component, Input } from '@angular/core'
import { Role } from './role'

@Component({
    moduleId: module.id,
    selector: 'ava-rol-dtl-app',
    templateUrl: 'role-details.html'
})
export class RoleDetailComponent{
    @Input() role: Role;
    levels: number[] = [6, 7, 8, 9, 10, 11, 12];
}
