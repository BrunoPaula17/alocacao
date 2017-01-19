import { Component, OnInit } from '@angular/core';

import { Header } from '../shared/grid/grid-header';
import { CustomGridService } from '../shared/grid/grid.service';

import { Project } from './project';
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'

import { PROJECTS, CUSTOMERS, PROFESSIONALS } from '../shared/mock'

@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})
export class ProjectComponent extends OnInit {
    constructor(private _gridService: CustomGridService<Project>) { super() }

    headers: Header[] = Project.Headers;
    model: Project = new Project();
    models: Project[] = PROJECTS;
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
        this.models[0].client = this.customers[0];
        this.models[0].sponsor = this.professionals[0];
    }
}