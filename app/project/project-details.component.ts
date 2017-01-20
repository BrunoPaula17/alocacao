import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from './project'
import { ProjectService } from '../project/Project.Service'
import { Customer } from '../customer/customer'
import { Professional } from '../professional/professional'

@Component({
    selector: 'ava-prj-dtl-app',
    templateUrl: './app/project/project-details.html'
})
export class ProjectDetailsComponent implements OnInit {
    constructor(private _router: ActivatedRoute,
        private _projectService: ProjectService,
        private _location: Location) { }

    @Input()
    model: Project;

    @Input()
    customers: Customer[];

    @Input()
    sponsors: Professional[];

    goBack(): void {
        this._location.back();
    }

    getDetails(id: number): Promise<Project> {
        return this._projectService.getProjectDetails(id);
    }

    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.getDetails(id);
        });
    }
}