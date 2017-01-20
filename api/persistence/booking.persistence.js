"use strict";
var BookingPersistence = (function () {
    function BookingPersistence() {
        this.bookings = [
            {
                "bookingID": 1,
                "projectID": 1,
                "pid": 10715376,
                "auditID": 1,
                "initialDate": new Date("2017-02-17T02:00:00.000Z"),
                "endDate": new Date("2017-03-03T03:00:00.000Z"),
                "bookingPercentual": 1,
                "project": null,
                "professional": null
            },
            {
                "bookingID": 1,
                "projectID": 1,
                "pid": 10715377,
                "auditID": 1,
                "initialDate": new Date("2017-02-16T02:00:00.000Z"),
                "endDate": new Date("2017-03-03T03:00:00.000Z"),
                "bookingPercentual": 1,
                "project": null,
                "professional": null
            },
            {
                "bookingID": 1,
                "projectID": 1,
                "pid": 10715378,
                "auditID": 1,
                "initialDate": new Date("2017-02-16T02:00:00.000Z"),
                "endDate": new Date("2017-03-03T03:00:00.000Z"),
                "bookingPercentual": 1,
                "project": null,
                "professional": null
            }
        ];
    }
    BookingPersistence.prototype.getBookings = function () {
        return this.bookings;
    };
    BookingPersistence.prototype.getBooking = function (id) {
        return this.bookings.find(function (booking) { return booking.bookingID === id; });
    };
    return BookingPersistence;
}());
exports.BookingPersistence = BookingPersistence;
//# sourceMappingURL=booking.persistence.js.map