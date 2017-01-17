import { Component } from '@angular/core'
import { Booking } from './booking'

@Component({
    selector: 'ava-bok-app',
    templateUrl: './app/booking/booking.html'
})
export class BookingComponent {
    model: Booking = {
            "pageName": "Alocação",
            "bookingID": 1,
            "projectID": 1,
            "pid": 11036009,
            "auditID": 1,
            "initialDate": null,
            "endDate": null,
            "bookingPercentual": 0.3
        };
}