import { Booking } from '../../app/booking/booking';
import { MongoClient, Db, UpdateWriteOpResult, InsertOneWriteOpResult } from 'mongodb';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

export class BookingPersistence implements ICrud<Booking> {

    create(booking: Booking): Promise<Booking> {
        let database: Db;
        let sequence: number;

        return Promise.resolve(
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
                        projectID: booking.projectID,
                        pid: booking.pid,
                        auditID: booking.auditID,
                        initialDate: booking.initialDate,
                        endDate: booking.endDate,
                        bookingPercentual: booking.bookingPercentual,
                        deleted: booking.deleted
                    })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1){
                        booking.bookingID = sequence;
                    }
                    else{
                        return Error("An error ocurred when trying to create a new record");
                    }
                })
        );
    }

    list(): Promise<Booking[]> {
        let database: Db;
        return Promise.resolve(
            Connection.create()
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
            Connection.create()
                .then((db: Db) => {
                    database = db;
                    return db.collection('bookings').findOne({ "bookingID": id });
                })
                .then((booking: Booking) => {
                    database.close();

                    return booking;
                }));
    }

    update(booking: Booking): Promise<Booking> {
        let database: Db;

        return Promise.resolve(
            Connection.create()
                .then((db: Db) => {
                    database = db;
                    return db.collection('bookings').updateOne({ bookingID: booking.bookingID }, {
                        bookingID: booking.bookingID,
                        projectID: booking.projectID,
                        pid: booking.pid,
                        auditID: booking.auditID,
                        initialDate: booking.initialDate,
                        endDate: booking.endDate,
                        bookingPercentual: booking.bookingPercentual,
                        deleted: booking.deleted
                    });
                })
                .then((updateResult: UpdateWriteOpResult) => {
                    database.close();

                    if (updateResult.result.ok == 1)
                        return booking;
                    else
                        return null;
                }));
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(false);
    }
}