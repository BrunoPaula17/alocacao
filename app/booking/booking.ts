import { BookingInterface } from './booking.interface';

export class Booking implements BookingInterface{
    bookingID: number;
    projectID: number;
    pid: number;
    auditID: number;
    initialDate: Date;
    endDate: Date;
    bookingPercentual: number;

}