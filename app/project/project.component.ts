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

export const PROJECTS: Project[] = [
    { "projectID": 1, "clientID": 1, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 1, "name": "PRJ001", wbs: "WBS00001" },
    { "projectID": 2, "clientID": 2, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 2, "name": "PRJ002", wbs: "WBS00002" },
    { "projectID": 3, "clientID": 3, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 3, "name": "PRJ003", wbs: "WBS00003" },
    { "projectID": 4, "clientID": 4, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 4, "name": "PRJ004", wbs: "WBS00004" },
    { "projectID": 5, "clientID": 5, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 5, "name": "PRJ005", wbs: "WBS00005" },
    { "projectID": 6, "clientID": 6, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 6, "name": "PRJ006", wbs: "WBS00006" },
    { "projectID": 7, "clientID": 7, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 7, "name": "PRJ007", wbs: "WBS00007" },
    { "projectID": 8, "clientID": 8, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 8, "name": "PRJ008", wbs: "WBS00008" },
    { "projectID": 9, "clientID": 9, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 9, "name": "PRJ009", wbs: "WBS00009" },
    { "projectID": 10, "clientID": 10, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 10, "name": "PRJ010", wbs: "WBS00011" },
    { "projectID": 11, "clientID": 11, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 11, "name": "PRJ011", wbs: "WBS00012" },
    { "projectID": 12, "clientID": 12, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 12, "name": "PRJ012", wbs: "WBS00013" },
    { "projectID": 13, "clientID": 13, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 13, "name": "PRJ013", wbs: "WBS00014" },
    { "projectID": 14, "clientID": 14, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 14, "name": "PRJ014", wbs: "WBS00015" },
    { "projectID": 15, "clientID": 15, "startDate": null, "endDate": null, "concludeDate": null, "sponsor": 15, "name": "PRJ015", wbs: "WBS00016" }
]