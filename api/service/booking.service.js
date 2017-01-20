"use strict";
var express_1 = require("express");
var booking_application_1 = require("../application/booking.application");
var bookingRouter = express_1.Router();
exports.bookingRouter = bookingRouter;
bookingRouter.get('/list', function (request, response) {
    var bookingApp = new booking_application_1.BookingApplication();
    response.json(bookingApp.getBookings());
});
bookingRouter.get('/:id', function (request, response) {
    var bookingApp = new booking_application_1.BookingApplication();
    var id = +request.params.id;
    return response.json(bookingApp.getBooking(id));
});
//# sourceMappingURL=booking.service.js.map