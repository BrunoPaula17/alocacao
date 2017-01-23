"use strict";
var express_1 = require("express");
var professional_application_1 = require("../application/professional.application");
var professionalRouter = express_1.Router();
exports.professionalRouter = professionalRouter;
professionalRouter.get('/create/:pid/:eid/:name/:email/:roleID/:prefix/:phone', function (request, response) {
    var professionalApp = new professional_application_1.ProfessionalApplication();
    var pid = +request.params.pid;
    var eid = request.params.eid;
    var name = request.params.name;
    var email = request.params.email;
    var roleID = +request.params.roleID;
    var prefix = +request.params.prefix;
    var phone = request.params.phone;
    //response.json(professionalApp.insertProfessionals(pid,eid,name,email,roleID,prefix,phone));
});
professionalRouter.get('/list', function (request, response) {
    var professionalApp = new professional_application_1.ProfessionalApplication();
    response.json(professionalApp.getProfessionals());
});
professionalRouter.get('/:id', function (request, response) {
    var professionalApp = new professional_application_1.ProfessionalApplication();
    var id = +request.params.id;
    return response.json(professionalApp.getProfessional(id));
});
//# sourceMappingURL=professional.service.js.map