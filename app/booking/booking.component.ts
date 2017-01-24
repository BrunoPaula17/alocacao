import { Component, OnInit } from '@angular/core';

import { Booking } from './booking';
import { BookingService } from './booking.service';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

@Component({
    selector: 'ava-bok-app',
    templateUrl: './app/booking/booking.html'
})
export class BookingComponent implements OnInit {
    constructor(private _bookingService: BookingService,
        private _professionalService: ProfessionalService,
        private _projectService: ProjectService) { }

    bookings: Booking[];
    projects: Project[];
    professionals: Professional[];

    getBookingsDetails(): void {
        this.bookings.forEach((item) => {
            this.getProfessionalDetails(item);
            this.getProjectDetails(item);
        });
    }

    getProjectDetails(booking: Booking): void {
        booking.project = this.projects.find(project => project.projectID == booking.projectID);
    }

    getProfessionalDetails(booking: Booking): void {
        booking.professional = this.professionals.find(professional => professional.pid == booking.pid);
    }

    delete(): void {
        console.log('delete');
    }

    ngOnInit(): void {
        this._professionalService.getProfessionalList()
            .then((professionals: Professional[]) => {
                this.professionals = professionals;

                return this._projectService.getProjects()
            })
            .then((projects: Project[]) => {
                this.projects = projects;

                return this._bookingService.getBookingList();
            })
            .then((booking: Booking[]) => {
                this.bookings = booking;

                this.getBookingsDetails();
            });
    }
}