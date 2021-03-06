import { Router, Response, Request } from 'express';
import { Booking } from '../../app/booking/booking';
import { BookingApplication } from '../application/booking.application';

const bookingRouter: Router = Router();

bookingRouter.get('/list', (request: Request, response: Response) => {
    let bookingApp: BookingApplication = new BookingApplication();

    bookingApp.getBookings()
        .then((bookings: Booking[]) => {
            response.json(bookings);
        });
});

bookingRouter.get('/:id', (request: Request, response: Response) => {
    let bookingApp: BookingApplication = new BookingApplication();

    let id: number = +request.params.id;

    bookingApp.getBooking(id)
        .then((booking: Booking) => {
            response.json(booking);
        })
});

bookingRouter.post('/create', (request: Request, response: Response) => {
    let bookingApp: BookingApplication = new BookingApplication();

    bookingApp.createBooking(request.body.booking)
        .then((bookingSaved: Booking) => {
            response.json(bookingSaved);
        })
});

bookingRouter.put('/:id', (request: Request, response: Response) => {
    let bookingApp: BookingApplication = new BookingApplication();

    bookingApp.saveBooking(request.body.booking)
        .then((bookingSaved: Booking) => {
            response.json(bookingSaved);
        });
});

bookingRouter.delete('/:id', (request: Request, response: Response) => {
    let bookingApp: BookingApplication = new BookingApplication();

    let id: number = +request.params.id;

    bookingApp.deleteBooking(id)
        .then((result: boolean) => {
            response.json(result);
        });
});

export { bookingRouter }