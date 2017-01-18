import { Component } from '@angular/core';
import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';

@Component({
    selector: 'ava-bok-app',
    templateUrl: './app/booking/booking.html'
})
export class BookingComponent {
    bookings: Booking[] = BOOKINGS;
    pageName: string = "Alocação";
    model: Booking;
}