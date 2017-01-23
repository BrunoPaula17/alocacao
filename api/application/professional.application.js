"use strict";
var professional_persistence_1 = require("../persistence/professional.persistence");
var ProfessionalApplication = (function () {
    function ProfessionalApplication() {
    }
    ProfessionalApplication.prototype.getProfessionals = function () {
        var professionalPersistence = new professional_persistence_1.ProfessionalPersistence();
        return professionalPersistence.getProfessionals();
    };
    ProfessionalApplication.prototype.getProfessional = function (pid) {
        var professionalPersistence = new professional_persistence_1.ProfessionalPersistence();
        return professionalPersistence.getProfessional(pid);
    };
    return ProfessionalApplication;
}());
exports.ProfessionalApplication = ProfessionalApplication;
//# sourceMappingURL=professional.application.js.map