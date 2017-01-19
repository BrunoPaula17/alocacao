import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';

@Injectable()
export class BookingService{
    getBookingList(): Promise<Booking[]>{
        return Promise.resolve(BOOKINGS);
    }
}