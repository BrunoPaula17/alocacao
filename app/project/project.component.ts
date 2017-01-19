import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../shared/mock' 
import { Header } from '../shared/header.grid'

import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'

import { CUSTOMERS, PROFESSIONALS } from '../shared/mock'

@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})
export class ProjectComponent implements OnInit {
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
    }
}