"use strict";
var RolePersistence = (function () {
    function RolePersistence() {
        this.roles = [
            {
                "roleId": 1,
                "name": "Associate Software Engineer",
                "brc": "2017SE",
                "level": 12,
                "description": "Initial software development"
            },
            {
                "roleId": 2,
                "name": "Software Engineer",
                "brc": "2017SE2",
                "level": 11,
                "description": "Software development"
            },
            {
                "roleId": 3,
                "name": "Senior Software Engineer",
                "brc": "2017SES",
                "level": 10,
                "description": "Senior software development"
            },
            {
                "roleId": 4,
                "name": "System Analyst",
                "brc": "2017SA",
                "level": 9,
                "description": "Role`s description"
            },
            {
                "roleId": 5,
                "name": "Senior System Analyst",
                "brc": "2017SSA",
                "level": 8,
                "description": "Role`s description"
            }
        ];
    }
    RolePersistence.prototype.getRoles = function () {
        return this.roles;
    };
    RolePersistence.prototype.getRole = function (id) {
        return this.roles.find(function (r) { return r.roleId === id; });
    };
    return RolePersistence;
}());
exports.RolePersistence = RolePersistence;
//# sourceMappingURL=role.persistence.js.map