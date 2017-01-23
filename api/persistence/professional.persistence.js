"use strict";
var ProfessionalPersistence = (function () {
    function ProfessionalPersistence() {
<<<<<<< HEAD
        this.Professional = [{
=======
        this.professional = [
            {
>>>>>>> 568957d6ffec782c420b727b91b78554541d65ad
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
<<<<<<< HEAD
    ProfessionalPersistence.prototype.getProfessinals = function () {
        return this.professional;
    };
    ProfessionalPersistence.prototype.getProfessionals = function (id) {
        return this.professional.find(function (professional) { return professional.professionalID === id; });
=======
    ProfessionalPersistence.prototype.getProfessionals = function () {
        return this.professional;
    };
    ProfessionalPersistence.prototype.getProfessional = function (id) {
        return this.professional.find(function (professional) { return professional.pid === id; });
>>>>>>> 568957d6ffec782c420b727b91b78554541d65ad
    };
    return ProfessionalPersistence;
}());
exports.ProfessionalPersistence = ProfessionalPersistence;
//# sourceMappingURL=professional.persistence.js.map