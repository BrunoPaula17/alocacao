import { Component } from '@angular/core'
import { Project } from './project'

@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})
export class ProjectComponent {
    model: Project = new Project();
    pageName: string = '<span class="fa fa-cubes"></span>&nbsp;Projetos';
}