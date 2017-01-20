import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Booking } from './booking';
import { BookingService } from './booking.service';

import { Professional } from '../professional/professional';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';
import { ProfessionalService } from '../professional/professional.service';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-dtl-app',
    templateUrl: 'booking-details.html'
})
export class BookingDetailComponent implements OnInit {
    constructor(private _bookingService: BookingService,
        private _router: ActivatedRoute,
        private _projectService: ProjectService,
        private _professionalService: ProfessionalService,
        private _location: Location) { }

    booking: Booking;
    @Input() professionals: Professional[];
    projects: Project[];

    getDetails(id: number): void {
        this._bookingService.getBooking(id)
            .then(booking => this.booking = booking);
    }

    goBack():void {
        this._location.back();
    }

    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            let id: number = +params['id'];
            this.getDetails(id);
        })

        this._projectService.getProjects()
                            .then(projects => this.projects = projects);

        this._professionalService.getProfessionalList()
                                 .then(professionals => this.professionals = professionals);
    }
}