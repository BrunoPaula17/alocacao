import { Component } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../shared/mock' 
import { Header } from '../shared/header.grid'

@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})
export class ProjectComponent {
    headers: Header[] = Project.Headers;
    model: Project = new Project();
    models: Project[] = PROJECTS;
    pageName: string = '<span class="fa fa-cubes"></span>&nbsp;Projetos';
}