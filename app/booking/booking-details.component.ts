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

    getComplementaryData(booking: Booking): void {
        if (this.professionals.length > 0)
            booking.professional = this.professionals.find(professional => professional.pid === booking.pid);
        else
            booking.professional = new Professional();

        if (this.projects.length > 0)
            booking.project = this.projects.find(project => project.projectId == booking.projectID);
        else
            booking.project = new Project();
    }

    getData(id: number): void {

        this.getInitData()
            .then((success: boolean) => {
                return this._bookingService.getBooking(id);
            })
            .then((booking: Booking) => {
                this.getComplementaryData(booking);
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

                return true;
            });
    }

    goBack(): void {
        this._location.back();
    }

    edit(): void {
        this._bookingService.editBooking(this.booking)
            .then((bookingSaved: Booking) => {
                this.getComplementaryData(bookingSaved);
                this.booking = bookingSaved;
                this.action = 'details';
            });
    }

    delete(confirm: boolean): void {
        if (confirm) {
            this._bookingService.deleteBooking(this.booking.bookingID)
                .then((result: boolean) => {
                    if (result) {
                        this.goBack();
                    }
                });
        }
    }

    save(): void {
        this._bookingService.saveBooking(this.booking)
            .then((bookingSaved: Booking) => {
                this.getComplementaryData(bookingSaved);
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

    initialDateChanged(value: Date): void {
        this.booking.initialDate = value;
    }

    endDateChanged(value: Date): void {
        this.booking.endDate = value;
    }

    changeRoute(value: string) {
        this.action = value;
    }
}