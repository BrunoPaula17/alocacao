import { Booking } from '../../app/booking/booking';
import { MongoClient, Db, UpdateWriteOpResult } from 'mongodb';
import { ICrud } from './crud.interface';
import { mongoUrl } from '../server';

export class BookingPersistence implements ICrud<Booking> {

    create(): Promise<Booking> {
        return null;
    }

    list(): Promise<Booking[]> {
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

    read(id: number): Promise<Booking> {
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

    update(booking: Booking): Promise<Booking> {
        let database: Db;

        return Promise.resolve(
            MongoClient.connect(mongoUrl)
                .then((db: Db) => {
                    let bookingToBeUpdated: Booking = booking;
                    bookingToBeUpdated.project = null;
                    bookingToBeUpdated.professional = null;

                    return db.collection('bookings').updateOne({ bookingID: booking.bookingID }, bookingToBeUpdated);
                })
                .then((updateResult: UpdateWriteOpResult) => {
                    if (updateResult.result.ok == 1)
                        return booking;
                }));
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }
}