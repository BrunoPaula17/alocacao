import { Component, Input } from '@angular/core'

import { Project } from './project'
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'



@Component({
    selector: 'ava-prj-dtl-app',
    templateUrl: './app/project/project-details.html'
})
export class ProjectDetailsComponent {
    @Input()
    model: Project;

    @Input()
    customers: Customer[];

    @Input()
    sponsors: Professional[];

}