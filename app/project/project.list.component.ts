import { Component, Input } from '@angular/core'
import { Project } from './project' 
import { Header } from '../shared/header.grid'

@Component({
    selector: 'ava-prj-list',
    templateUrl: './app/project/project-list.html'
})
export class ProjectListComponent {
    @Input()
    models: Project[];
    @Input()
    headers: Header[];
}