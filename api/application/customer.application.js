"use strict";
var customer_persistence_1 = require("../persistence/customer.persistence");
var professional_application_1 = require("./professional.application");
var CustomerApplication = (function () {
    function CustomerApplication() {
    }
    CustomerApplication.prototype.getCustomers = function () {
        var customerPersistence = new customer_persistence_1.CustomerPersistence();
        var professionalApp = new professional_application_1.ProfessionalApplication();
        var costumers;
        var professionals;
        costumers = customerPersistence.getCustomers();
        professionals = professionalApp.getProfessionals();
        costumers.forEach(function (customer) {
            customer.professional = professionals.find(function (professional) { return professional.pid == customer.responsible; });
        });
        return costumers;
    };
    CustomerApplication.prototype.getCustomer = function (id) {
        var customerPersistence = new customer_persistence_1.CustomerPersistence();
        var costumer;
        costumer = customerPersistence.getCustomer(id);
        return costumer;
    };
    return CustomerApplication;
}());
exports.CustomerApplication = CustomerApplication;
//# sourceMappingURL=customer.application.js.map