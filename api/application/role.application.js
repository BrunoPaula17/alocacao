"use strict";
var role_persistence_1 = require("../persistence/role.persistence");
var RoleApplication = (function () {
    function RoleApplication() {
    }
    RoleApplication.prototype.getRoles = function () {
        var rolePersistence = new role_persistence_1.RolePersistence();
        return rolePersistence.getRoles();
    };
    RoleApplication.prototype.getRole = function (id) {
        var rolePersistence = new role_persistence_1.RolePersistence();
        return rolePersistence.getRole(id);
    };
    return RoleApplication;
}());
exports.RoleApplication = RoleApplication;
//# sourceMappingURL=role.application.js.map