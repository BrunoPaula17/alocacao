"use strict";
var express = require("express");
var http = require("http");
var path = require("path");
var body_parser_1 = require("body-parser");
var booking_service_1 = require("./service/booking.service");
var role_service_1 = require("./service/role.service");
var app = express();
exports.app = app;
app.use(express.static(path.join(__dirname, '../')));
app.use(body_parser_1.json());
// Rotas de API
app.use('/api/booking/', booking_service_1.bookingRouter);
app.use('/api/role/', role_service_1.roleRouter);
app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '../index.html'));
});
var server = http.createServer(app);
server.listen(3000);
//# sourceMappingURL=server.js.map