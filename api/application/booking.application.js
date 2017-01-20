"use strict";
var booking_persistence_1 = require("../persistence/booking.persistence");
var BookingApplication = (function () {
    function BookingApplication() {
    }
    BookingApplication.prototype.getBookings = function () {
        var bookingPersistence = new booking_persistence_1.BookingPersistence();
        return bookingPersistence.getBookings();
    };
    BookingApplication.prototype.getBooking = function (id) {
        var bookingPersistence = new booking_persistence_1.BookingPersistence();
        return bookingPersistence.getBooking(id);
    };
    return BookingApplication;
}());
exports.BookingApplication = BookingApplication;
//# sourceMappingURL=booking.application.js.map