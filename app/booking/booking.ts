import { BookingInterface } from './booking.interface'

export class Booking implements BookingInterface{
    pageName: string;
    bookingID: number;
    projectID: number;
    pid: number;
    auditID: number;
    initialDate: Date;
    endDate: Date;
    bookingPercentual: number;

}