import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'

import { Header } from '../shared/grid/grid-header';
import { CustomGridService } from '../shared/grid/grid.service';

import { Project } from './project';
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'
import { ProjectService } from './project.service'


//import { CustomerService } from '../customer/customer.service'
import { ProfessionalService } from '../professional/professional.service'


@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})

export class ProjectComponent extends OnInit {
    constructor(private _gridService: CustomGridService<Project>,
        private _router: Router,
        //private _customerService: CustomerService,
        private _professionalService: ProfessionalService,
        private _projectService: ProjectService) {
        super();
        this._projectService.getProjects().then((projects: Project[]) => this._gridService.models = projects);
        this._professionalService.getProfessionalList().then((professionals: Professional[]) => this.professionals = professionals);
        //this._customerService.getCustomerList().then((customers: Customer[]) => this.customers = customers);
    }

    pageName: string = '<span class="fa fa-cubes"></span>&nbsp;Projetos';
    project: Project = new Project();
    customers: Customer[];
    professionals: Professional[];

    ngOnInit() {
        this._projectService.getProjects().then((projects: Project[]) => this._gridService.models = projects);
        this._gridService.headers = Project.Headers;
        this._gridService.update = this.UpdateProject.bind(this);
        this._gridService.delete = this.deleteProject.bind(this);
    }

    public UpdateProject(project: Project) {
        this.project = project;
        this._router.navigate(['project', project.projectID]);
    }

    public deleteProject(project: Project) {
        this._projectService.deleteProject(project.projectID)
            .then(() => this._projectService.getProjects()
                .then((projects: Project[]) => this._gridService.models = projects))
            .then(() => alert("Elemento deletado"));

    }

}