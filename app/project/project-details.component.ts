import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from './project';
import { ProjectService } from '../project/project.service';
import { Customer } from '../customer/customer';
import { Professional } from '../professional/professional';

//import { CustomerService } from '../customer/customer.service'
import { ProfessionalService } from '../professional/professional.service'

@Component({
    selector: 'ava-prj-dtl-app',
    templateUrl: './app/project/project-details.html'
})
export class ProjectDetailsComponent implements OnInit {
    constructor(private _router: ActivatedRoute,
        private _projectService: ProjectService,
        //private _customerService: CustomerService,
        private _professionalService: ProfessionalService,
        private _location: Location) {

        this._professionalService.getProfessionalList().then((professionals: Professional[]) => this.sponsors = professionals);
        //this._customerService.getCustomerList().then((customers: Customer[]) => this.customers = customers);
    }

    project: Project;
    customers: Customer[];
    sponsors: Professional[];

    goBack(): void {
        this._location.back();
    }

    getDetails(id: number): void {
        this._projectService.getProjectDetails(id)
            .then((project: Project) => {
                this.project = project;
            });
    }

    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.getDetails(id);
        });
    }
}