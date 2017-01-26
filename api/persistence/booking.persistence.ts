import { Booking } from '../../app/booking/booking';
import { MongoClient, Db } from 'mongodb';
import { mongoUrl } from '../server';

export class BookingPersistence {
    getBookings(): Promise<Booking[]> {
        let database: Db = null;
        return Promise.resolve(MongoClient.connect(mongoUrl)
            .then((db: Db) => {
                database = db;
                return db.collection('bookings').find().toArray();
            })
            .then((booking: Booking[]) => {
                database.close();
                return booking;
            }));
    }

    getBooking(id: number): Promise<Booking> {
        let database: Db;
        return Promise.resolve(
            MongoClient.connect(mongoUrl)
                .then((db: Db) => {
                    return db.collection('bookings').findOne({ "bookingID": id });
                })
                .then((booking: Booking) => {
                    return booking;
                }));
    }
}