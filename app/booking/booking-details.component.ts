import { Component, Input } from '@angular/core';
import { Booking } from './booking';
import { Professional } from '../professional/professional';
import { Project } from '../project/project';


@Component({
    moduleId: module.id,
    selector: 'ava-bok-dtl-app',
    templateUrl: 'booking-details.html'
})
export class BookingDetailComponent {
    @Input() booking: Booking;
    @Input() professionals: Professional[];
    @Input() projects: Project[];
}