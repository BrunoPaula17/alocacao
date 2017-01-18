import { Component, Input } from '@angular/core'
import { Project } from './project'

@Component({
    selector: 'ava-prj-list',
    templateUrl: './app/project/project-list.html'
})
export class ProjectListComponent {
    @Input()
    models: Project[];
}