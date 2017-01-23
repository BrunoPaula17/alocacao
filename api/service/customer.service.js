"use strict";
var express_1 = require("express");
var customer_application_1 = require("../application/customer.application");
var customerRouter = express_1.Router();
exports.customerRouter = customerRouter;
customerRouter.get('/list', function (request, response) {
    var customerApp = new customer_application_1.CustomerApplication();
    response.json(customerApp.getCustomers());
});
customerRouter.get('/:id', function (request, response) {
    var customerApp = new customer_application_1.CustomerApplication();
    var id = +request.params.id;
    return response.json(customerApp.getCustomer(id));
});
//# sourceMappingURL=customer.service.js.map