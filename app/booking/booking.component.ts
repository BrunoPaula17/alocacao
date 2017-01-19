import { Component, OnInit } from '@angular/core';

import { Booking } from './booking';
import { BookingService } from './booking.service';

import { Project } from '../project/project';

import { Professional } from '../professional/professional';

import { PROJECTS, PROFESSIONALS } from '../shared/mock';

@Component({
    selector: 'ava-bok-app',
    templateUrl: './app/booking/booking.html'
})
export class BookingComponent implements OnInit {
    constructor(private _bookingService: BookingService) {

    }

    bookings: Booking[];
    projects: Project[] = PROJECTS;
    professionals: Professional[] = PROFESSIONALS;
    currentBooking: Booking;

    getProjectDetails(booking: Booking): void {
        booking.project = this.projects.find(project => project.projectID == booking.projectID);
    }

    getProfessionalDetails(booking: Booking): void {
        booking.professional = this.professionals.find(professional => professional.pid == booking.pid);
    }

    ngOnInit(): void {
        this._bookingService.getBookingList()
            .then(bookings => this.bookings = bookings)
            .then(() => {
                this.bookings.forEach((item, index) => {
                    this.getProjectDetails(item);
                    this.getProfessionalDetails(item);
                });
            }
            );
    }

    getDetails(booking: Booking) {
        this.currentBooking = booking;
    }
}