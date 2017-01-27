import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Booking } from './booking';

import 'rxjs/add/operator/toPromise';

const SERVICE_URL: string = '/api/booking'

@Injectable()
export class BookingService {
    constructor(private _httpService: Http) { }

    getBookingList(): Promise<Booking[]> {
        let url: string = `${SERVICE_URL}/list`;
        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Booking[];
            })
            .catch(this.errorHandling);
    }

    getBooking(id: number): Promise<Booking> {
        let url: string = `${SERVICE_URL}/${id}`;

        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Booking;
            })
            .catch(this.errorHandling);
    }

    saveBooking(booking: Booking): Promise<Booking> {
        let url: string = `${SERVICE_URL}/create`;

        return this._httpService.post(url, { booking: booking })
            .toPromise()
            .then((response: Response) => {
                return response.json() as Booking;
            })
            .catch(this.errorHandling);
    }

    editBooking(booking: Booking): Promise<Booking> {
        let url: string = `${SERVICE_URL}/${booking.bookingID}`;

        return this._httpService.put(url, { booking: booking })
            .toPromise()
            .then((response: Response) => {
                return response.json() as Booking;
            })
            .catch(this.errorHandling);
    }

    errorHandling(error: any) { console.log(error.message || error); }
}