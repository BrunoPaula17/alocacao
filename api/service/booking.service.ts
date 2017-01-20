import { Router, Response, Request } from 'express';
import { Booking } from '../../app/booking/booking';
import { BookingApplication } from '../application/booking.application';

const bookingRouter: Router = Router();

bookingRouter.get('/list', (request: Request, response: Response) => {
    let bookingApp: BookingApplication = new BookingApplication();

    response.json(bookingApp.getBookings());
});

bookingRouter.get('/:id', (request: Request, response: Response) => {
    let bookingApp: BookingApplication = new BookingApplication();
    
    let id: number = +request.params.id;

    return response.json(bookingApp.getBooking(id));
});


export { bookingRouter }