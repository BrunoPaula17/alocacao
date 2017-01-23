"use strict";
var CustomerPersistence = (function () {
    function CustomerPersistence() {
        this.customers = [
            {
                "customerID": 1,
                "name": "Santander",
                "responsible": 10715377,
                "professional": null,
                "contact": "Roseli",
                "email": "roseli@santander.com.br"
            },
            {
                "customerID": 2,
                "name": "Itaú",
                "responsible": 10715378,
                "professional": null,
                "contact": "João",
                "email": "joao@itau.com.br"
            },
            {
                "customerID": 3,
                "name": "Safra",
                "responsible": 10715376,
                "professional": null,
                "contact": "Gabriel",
                "email": "gabriel@safra.com.br"
            }
        ];
    }
    CustomerPersistence.prototype.getCustomers = function () {
        return this.customers;
    };
    CustomerPersistence.prototype.getCustomer = function (id) {
        return this.customers.find(function (customer) { return customer.customerID === id; });
    };
    return CustomerPersistence;
}());
exports.CustomerPersistence = CustomerPersistence;
//# sourceMappingURL=customer.persistence.js.map