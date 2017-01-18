import { Component, Input } from '@angular/core'

import { Project } from './project'
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'



@Component({
    selector: 'ava-prj-form',
    templateUrl: './app/project/project-form.html'
})
export class ProjectFormComponent {
    @Input()
    model: Project;

    @Input()
    customers: Customer[];

    @Input()
    sponsors: Professional[];

}