import { Booking } from '../../app/booking/booking';
import { BookingPersistence } from '../persistence/booking.persistence';

export class BookingApplication{
    getBookings(): Booking[]{
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.getBookings();
    }

    getBooking(id: number): Booking{
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return  bookingPersistence.getBooking(id);
    }
}