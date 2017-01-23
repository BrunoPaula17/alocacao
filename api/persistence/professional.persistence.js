"use strict";
var ProfessionalPersistence = (function () {
    function ProfessionalPersistence() {
        this.Professional = [{
                "pid": 10715376,
                "eid": "ronye.peterson.anjos",
                "name": "Ronye Peterson Martins dos Anjos",
                "email": "ronye.peterson.anjos@avanade.com",
                "roleID": 1,
                "prefix": 11,
                "phone": "971537512",
                "role": null
            },
            {
                "pid": 10715377,
                "eid": "thomas.anjos",
                "name": "Thomas Jefferson Martins dos Anjos",
                "email": "thomas.anjos@avanade.com",
                "roleID": 2,
                "prefix": 11,
                "phone": "963484588",
                "role": null
            },
            {
                "pid": 10715378,
                "eid": "elziria.anjos",
                "name": "Elziria Martins dos Anjos",
                "email": "elziria.dos.anjos@avanade.com",
                "roleID": 3,
                "prefix": 11,
                "phone": "984841212",
                "role": null
            },
            {
                "pid": 10715379,
                "eid": "jose.dos.anjos",
                "name": "Jose dos Anjos",
                "email": "jose.dos.anjos@avanade.com",
                "roleID": 4,
                "prefix": 11,
                "phone": "931312323",
                "role": null
            }
        ];
    }
    ProfessionalPersistence.prototype.getProfessionals = function () {
        return this.professional;
    };
    ProfessionalPersistence.prototype.getProfessional = function (id) {
        return this.professional.find(function (professional) { return professional.pid === id; });
    };
    ProfessionalPersistence.prototype.createProfessional = function (pid, eid, name, email, roleID, prefix, phone) {
    };
    ProfessionalPersistence.prototype.updateProfessional = function (pid, eid, name, email, roleID, prefix, phone) {
    };
    ProfessionalPersistence.prototype.deleteProfessional = function (pid) {
        return true;
    };
    return ProfessionalPersistence;
}());
exports.ProfessionalPersistence = ProfessionalPersistence;
//# sourceMappingURL=professional.persistence.js.map