import { Booking } from '../../app/booking/booking';
import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

export class BookingPersistence implements ICrud<Booking> {

    create(booking: Booking): Promise<Booking> {
        let database: Db;
        let sequence: number;

        return Promise.resolve<Booking>(
            Connection.getNextSequence('bookingID')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.create();
                })
                .then((db: Db) => {
                    database = db;

                    return db.collection('bookings').insertOne({
                        _id: sequence,
                        bookingID: sequence,
                        projectID: +booking.projectID,
                        pid: +booking.pid,
                        auditID: booking.auditID,
                        initialDate: booking.initialDate,
                        endDate: booking.endDate,
                        bookingPercentual: booking.bookingPercentual,
                        deleted: booking.deleted
                    })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        let savedBooking: Booking = insertResult.ops[0] as Booking;

                        return savedBooking;
                    }
                    else {
                        return Promise.reject<Booking>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }

    list(): Promise<Booking[]> {
        let database: Db;
        return Promise.resolve<Booking[]>(
            Connection.create()
                .then((db: Db) => {
                    database = db;
                    return db.collection('bookings').find({ deleted: false }).toArray();
                })
                .then((booking: Booking[]) => {
                    database.close();
                    return booking;
                }));
    }

    read(id: number): Promise<Booking> {
        let database: Db;
        return Promise.resolve<Booking>(
            Connection.create()
                .then((db: Db) => {
                    database = db;
                    return db.collection('bookings').findOne({ bookingID: id, deleted: false });
                })
                .then((booking: any) => {
                    database.close();

                    return booking as Booking;
                }));
    }

    update(booking: Booking): Promise<Booking> {
        let database: Db;

        return Promise.resolve<Booking>(
            Connection.create()
                .then((db: Db) => {
                    database = db;
                    return db.collection('bookings').findOneAndUpdate({ bookingID: booking.bookingID }, {
                        bookingID: booking.bookingID,
                        projectID: +booking.projectID,
                        pid: +booking.pid,
                        auditID: booking.auditID,
                        initialDate: booking.initialDate,
                        endDate: booking.endDate,
                        bookingPercentual: booking.bookingPercentual,
                        deleted: booking.deleted
                    }, { returnOriginal: false });
                })
                .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    database.close();

                    if (updateResult.ok == 1)
                        return updateResult.value;
                    else
                        return Error("An error ocurred while triyng to update a record");
                }));
    }

    delete(id: number): Promise<boolean> {
        let database: Db;
        return Connection.create()
            .then((db: Db) => {
                database = db;

                return db.collection('bookings').findOneAndUpdate(
                    { bookingID: id },
                    { $set: { 'deleted': true } });
            })
    }
}