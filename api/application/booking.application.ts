import { Booking } from '../../app/booking/booking';
import { BookingPersistence } from '../persistence/booking.persistence';

export class BookingApplication {
    getBookings(): Promise<Booking[]> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.getBookings();
    }

    getBooking(id: number): Promise<Booking> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.getBooking(id);
    }

    saveBooking(booking: Booking): Promise<Booking> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.saveBooking(booking);
    }
}