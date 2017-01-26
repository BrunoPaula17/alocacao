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

        this.getInitData()
            .then((success: boolean) => {
                return this._bookingService.getBooking(id);
            })
            .then((booking: Booking) => {
                booking.professional = this.professionals.find(professional => professional.pid === booking.pid);
                booking.project = this.projects.find(project => project.projectId == booking.projectID);
                this.booking = booking;
            });
    }

    getInitData(): Promise<boolean> {
        return this._professionalService.getProfessionalList()
            .then((professionals: Professional[]) => {
                this.professionals = professionals;

                return this._projectService.getProjectsList()
            })
            .then((projects: Project[]) => {
                this.projects = projects;
            })
            .then(() => { return true });
    }

    goBack(): void {
        this._location.back();
    }

    edit(): void {
        this.action = 'edit';
    }

    delete(): void {
        console.log('delete');
    }

    save(): void {
        this._bookingService.saveBooking(this.booking)
            .then((bookingSaved: Booking) => {
                this.booking = bookingSaved;
                this.action = 'details';
            });
    }

    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            this.action = params['action'];
            this.action = this.action.toLowerCase();

            if (this.action === 'create') {
                this.getInitData()
                    .then((success: Boolean) => {
                        this.booking = new Booking();
                    });
            } else {
                let id: number = +params['id'];
                this.getData(id);
            }
        })
    }
}