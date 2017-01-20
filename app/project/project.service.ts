import { Injectable } from '@angular/core';

import { Project } from '../project/project'
import { PROJECTS } from '../shared/mock';

@Injectable()
export class ProjectService {
    _PROJECTS: Project[];

    constructor() {
        this._PROJECTS = PROJECTS;
    }


    getProjectDetails(projectID: number): Promise<Project> {
        return Promise.resolve(this._PROJECTS.find(project => project.projectID == projectID));
    }

    getProjects(): Promise<Project[]> {
        return Promise.resolve(this._PROJECTS);
    }

    insertProject(project: Project): Project {
        this._PROJECTS.push(project);
        return project;
    }

    updateProject(project: Project): Project {
        this._PROJECTS.filter(function () { });
        return project;
    }

    deleteProject(projectID: number): Promise<Boolean> {
        this._PROJECTS = this._PROJECTS.filter(function (project: Project) {
            return project.projectID != projectID
        });
        return Promise.resolve(true);
    }
}