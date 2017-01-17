import { Component } from '@angular/core'
import { Project } from './project'

@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})
export class ProjectComponent {
    model: Project = {
        projectID: 1,
        clientId: 1,
        startEnd: null,
        endDate: null,
        concludeDate: null,
        sponsor: 1,
        name: "PRJ001",
        wbs: "WBS00001",
    };
}