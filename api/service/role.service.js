"use strict";
var express_1 = require("express");
var role_application_1 = require("../application/role.application");
var roleRouter = express_1.Router();
exports.roleRouter = roleRouter;
roleRouter.get('/list', function (request, response) {
    var roleApp = new role_application_1.RoleApplication();
    return response.json(roleApp.getRoles());
});
roleRouter.get('/:id', function (request, response) {
    var roleApp = new role_application_1.RoleApplication();
    var id = +request.params.id;
    return response.json(roleApp.getRole(id));
});
//# sourceMappingURL=role.service.js.map