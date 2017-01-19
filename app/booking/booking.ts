import { BookingInterface } from './booking.interface';
import { Project } from '../project/project'
import { Professional } from '../professional/professional';

export class Booking implements BookingInterface{
    bookingID: number;
    projectID: number;
    pid: number;
    auditID: number;
    initialDate: Date;
    endDate: Date;
    bookingPercentual: number;
    project: Project;
    professional: Professional;
}