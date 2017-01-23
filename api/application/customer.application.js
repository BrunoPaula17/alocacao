"use strict";
var customer_persistence_1 = require("../persistence/customer.persistence");
var CustomerApplication = (function () {
    function CustomerApplication() {
    }
    CustomerApplication.prototype.getCustomers = function () {
        var customerPersistence = new customer_persistence_1.CustomerPersistence();
        return customerPersistence.getCustomers();
    };
    CustomerApplication.prototype.getCustomer = function (id) {
        var customerPersistence = new customer_persistence_1.CustomerPersistence();
        return customerPersistence.getCustomer(id);
    };
    return CustomerApplication;
}());
exports.CustomerApplication = CustomerApplication;
//# sourceMappingURL=customer.application.js.map