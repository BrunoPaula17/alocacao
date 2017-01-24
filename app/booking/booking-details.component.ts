import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Booking } from './booking';
import { BookingService } from './booking.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-dtl-app',
    templateUrl: 'booking-details.html'
})
export class BookingDetailComponent implements OnInit {
    constructor(private _bookingService: BookingService,
        private _router: ActivatedRoute,
        private _location: Location,
        private _professionalService: ProfessionalService,
        private _projectService: ProjectService) { }

    booking: Booking;
    professionals: Professional[];
    projects: Project[];
    action: string;

    getData(id: number): void {
        this._professionalService.getProfessionalList()
            .then((professionals: Professional[]) => {
                this.professionals = professionals;
            })
            .then(() => {
                return this._projectService.getProjects()
            })
            .then((projects: Project[]) => {
                this.projects = projects;
            })
            .then(() => {
                return this._bookingService.getBooking(id);
            })
            .then((booking: Booking) => {
                this.booking = booking;
            });
    }

    getDetails(id: number): void {
        let actualBooking: Booking;

        this._bookingService.getBooking(id)
            .then((booking: Booking) => {
                actualBooking = booking;

                return this._projectService.getProjectDetails(actualBooking.projectID);
            })
            .then((project: Project) => {
                actualBooking.project = project;

                return this._professionalService.getProfessionalRead(actualBooking.pid)
            })
            .then((professional: Professional) => {
                actualBooking.professional = professional;

                this.booking = actualBooking;
            });
    }

    goBack(): void {
        this._location.back();
    }

    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.action = params['action'];

            this.action = this.action.toLowerCase();

            if (this.action === "details")
                this.getDetails(id);
            else
                this.getData(id);
        })
    }
}