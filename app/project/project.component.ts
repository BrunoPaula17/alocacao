import { Component } from '@angular/core'
import { Project } from './project'

@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})
export class ProjectComponent {
    model: Project = {
        projectID: 1,
        clientID: 1,
        startDate: null,
        endDate: null,
        concludeDate: null,
        sponsor: 1,
        name: "PRJ001",
        wbs: "WBS00001",
    };
}