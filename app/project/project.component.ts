import { Component, OnInit } from '@angular/core';

import { Header } from '../shared/grid/grid-header';
import { CustomGridService } from '../shared/grid/grid.service';

import { Project } from './project';
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'
import { ProjectService } from './project.service'

import { CUSTOMERS, PROFESSIONALS } from '../shared/mock'

@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})
export class ProjectComponent extends OnInit {
    constructor(private _gridService: CustomGridService<Project>,
        private _projectService: ProjectService) { super() }

    model: Project = new Project();
    pageName: string = '<span class="fa fa-cubes"></span>&nbsp;Projetos';

    customers: Customer[];
    professionals: Professional[];

    getCustomers(): void {
        this.customers = CUSTOMERS;
    }

    getProfessionals(): void {
        this.professionals = PROFESSIONALS;
    }

    ngOnInit() {
        this.getCustomers();
        this.getProfessionals();
        this._projectService.getProjects()
            .then((projects: Project[]) => this._gridService.models = projects)
        this._gridService.headers = Project.Headers;
        this._gridService.headers[0].Edit = function(obj: Project){
            console.log(obj);
        }
    }
}