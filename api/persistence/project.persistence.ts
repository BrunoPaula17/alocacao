import {Project } from '../../app/project/project';
import { ICrud } from './crud.interface';

export class ProjectPersistence implements ICrud<Project>{

    private projects : Project[] = [
        {
        "projectID": 1,
        "clientID": 1,
        "client": null,
        "startDate": new Date("2017-02-11T12:21:00.761Z"),
        "endDate": new Date("2017-01-26T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 1,
        "sponsor": null,
        "name": "PRJ001",
        "wbs": "WBS00001",
        "deleted": false
    },
    {
        "projectID": 2,
        "clientID": 2,
        "client": null,
        "startDate": new Date("2017-03-12T12:21:00.761Z"),
        "endDate": new Date("2017-01-27T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 2,
        "sponsor": null,
        "name": "PRJ002",
        "wbs": "WBS00002",
        "deleted": false
    },
    {
        "projectID": 3,
        "clientID": 3,
        "client": null,
        "startDate": new Date("2017-01-13T12:21:00.761Z"),
        "endDate": new Date("2017-01-12T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 3,
        "sponsor": null,
        "name": "PRJ003",
        "wbs": "WBS00003",
        "deleted": false
    },
    {
        "projectID": 4,
        "clientID": 4,
        "client": null,
        "startDate": new Date("2017-01-14T12:21:00.761Z"),
        "endDate": new Date("2017-01-30T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 4,
        "sponsor": null,
        "name": "PRJ004",
        "wbs": "WBS00004",
        "deleted": false
    },
    {
        "projectID": 5,
        "clientID": 5,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 5,
        "sponsor": null,
        "name": "PRJ005",
        "wbs": "WBS00005",
        "deleted": false
    },
    {
        "projectID": 6,
        "clientID": 6,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 6,
        "sponsor": null,
        "name": "PRJ006",
        "wbs": "WBS00006",
        "deleted": false
    },
    {
        "projectID": 7,
        "clientID": 7,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 7,
        "sponsor": null,
        "name": "PRJ007",
        "wbs": "WBS00007",
        "deleted": false
    },
    {
        "projectID": 8,
        "clientID": 8,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 8,
        "sponsor": null,
        "name": "PRJ008",
        "wbs": "WBS00008",
        "deleted": false
    },
    {
        "projectID": 9,
        "clientID": 9,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 9,
        "sponsor": null,
        "name": "PRJ009",
        "wbs": "WBS00009",
        "deleted": false
    },
    {
        "projectID": 10,
        "clientID": 10,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 10,
        "sponsor": null,
        "name": "PRJ010",
        "wbs": "WBS00011",
        "deleted": false
    },
    {
        "projectID": 11,
        "clientID": 11,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 11,
        "sponsor": null,
        "name": "PRJ011",
        "wbs": "WBS00012",
        "deleted": false
    },
    {
        "projectID": 12,
        "clientID": 12,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 12,
        "sponsor": null,
        "name": "PRJ012",
        "wbs": "WBS00013",
        "deleted": false
    },
    {
        "projectID": 13,
        "clientID": 13,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 13,
        "sponsor": null,
        "name": "PRJ013",
        "wbs": "WBS00014",
        "deleted": false
    },
    {
        "projectID": 14,
        "clientID": 14,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 14,
        "sponsor": null,
        "name": "PRJ014",
        "wbs": "WBS00015",
        "deleted": false
    },
    {
        "projectID": 15,
        "clientID": 15,
        "client": null,
        "startDate": new Date("2017-01-15T12:21:00.761Z"),
        "endDate": new Date("2017-05-15T12:21:00.761Z"),
        "concludeDate": null,
        "sponsorID": 15,
        "sponsor": null,
        "name": "PRJ015",
        "wbs": "WBS00016",
        "deleted": false
    }
    ];

    List(): Project[]{
        return this.projects;
    }

    Read(projectID: number): Project{
        return this.projects.find(project => project.projectID === projectID);
    }

    Create(projectCreate: Project): Project{
        this.projects.push(projectCreate);
        return projectCreate;
    }

    Update(projectUpdate: Project): Project{
        let project: Project = this.projects.find(p => p.projectID === projectUpdate.projectID);
        if(projectUpdate != null){
            project = projectUpdate;
            return project;
        }else
            return null;
    }

    Delete(projectDelete: Project): boolean{
        let project: Project = this.projects.find(p => p.projectID === projectDelete.projectID);
        if (project != null) {
            project.deleted = true;
            return true;
        }
        else
            return false;
    }
}