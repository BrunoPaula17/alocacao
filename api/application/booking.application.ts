import { Booking } from '../../app/booking/booking';
import { BookingPersistence } from '../persistence/booking.persistence';

export class BookingApplication {
    getBookings(): Promise<Booking[]> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.list();
    }

    getBooking(id: number): Promise<Booking> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.read(id);
    }

    saveBooking(booking: Booking): Promise<Booking> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.update(booking);
    }

    createBooking(booking: Booking): Promise<Booking> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        booking.deleted = false;
        
        return bookingPersistence.create(booking);
    }

    deleteBooking(id: number): Promise<boolean> {
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.delete(id);
    }
}