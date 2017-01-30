import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Booking } from './booking';

import 'rxjs/add/operator/toPromise';

const SERVICE_URL: string = '/api/booking'

@Injectable()
export class BookingService {
    constructor(private _httpService: Http) { }

    private convertBookings(bookings: Booking[]): Booking[] {
        let newBookings: Booking[] = new Array<Booking>();

        newBookings.forEach(booking => {
            newBookings.push(this.convertBooking(booking));
        });

        return newBookings;
    }

    private convertBooking(booking: Booking): Booking {
        let book: Booking = new Booking;
        book.auditID = booking.auditID;
        book.bookingID = booking.bookingID;
        book.bookingPercentual = booking.bookingPercentual;
        book.deleted = booking.deleted;
        book.endDate = new Date(booking.endDate);
        book.initialDate = new Date(booking.initialDate);
        book.pid = booking.pid;
        book.projectID = booking.projectID;

        return book;
    }

    getBookingList(): Promise<Booking[]> {
        let url: string = `${SERVICE_URL}/list`;
        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                let bookingsReceived: Booking[] = response.json() as Booking[];

                return this.convertBookings(bookingsReceived);
            })
            .catch(this.errorHandling);
    }

    getBooking(id: number): Promise<Booking> {
        let url: string = `${SERVICE_URL}/${id}`;

        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                let booking: Booking = response.json() as Booking;

                return this.convertBooking(booking);
            })
            .catch(this.errorHandling);
    }

    saveBooking(booking: Booking): Promise<Booking> {
        let url: string = `${SERVICE_URL}/create`;

        return this._httpService.post(url, { booking: booking })
            .toPromise()
            .then((response: Response) => {
                let booking: Booking = response.json() as Booking;

                return this.convertBooking(booking);
            })
            .catch(this.errorHandling);
    }

    editBooking(booking: Booking): Promise<Booking> {
        let url: string = `${SERVICE_URL}/${booking.bookingID}`;

        return this._httpService.put(url, { booking: booking })
            .toPromise()
            .then((response: Response) => {
                let booking: Booking = response.json() as Booking;

                return this.convertBooking(booking);
            })
            .catch(this.errorHandling);
    }

    errorHandling(error: any) { console.log(error.message || error); }
}