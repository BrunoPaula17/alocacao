import { Injectable } from '@angular/core';

import { Project } from '../project/project'
import { PROJECTS } from '../shared/mock';

@Injectable()
export class ProjectService {

    getProjectDetails(projectID: number): Promise<Project> {
        return Promise.resolve(PROJECTS.find(project => project.projectID == projectID));
    }

    getProjects(): Promise<Project[]> {
        return Promise.resolve(PROJECTS);
    }
}