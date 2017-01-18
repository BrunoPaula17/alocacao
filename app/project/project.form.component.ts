import { Component, Input } from '@angular/core'
import { Project } from './project'

@Component({
    selector: 'ava-prj-form',
    templateUrl: './app/project/project-form.html'
})
export class ProjectFormComponent {
    @Input()
    model: Project;
}