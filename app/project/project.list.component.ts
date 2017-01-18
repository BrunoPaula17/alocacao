import { Component, Input } from '@angular/core'

import { Header } from '../shared/header.grid';

import { Project } from './project'
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'



@Component({
    selector: 'ava-prj-list',
    templateUrl: './app/project/project-list.html'
})
export class ProjectListComponent {
    @Input()
    models: Project[];

    @Input()
    headers: Header[];

    @Input()
    sponsors: Professional[];

    @Input()
    customers: Customer[];
}