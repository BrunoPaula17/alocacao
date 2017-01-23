import { Role } from '../../app/role/role';

export class RolePersistence {
    private roles: Role[] = [
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

    getRoles(): Role[]{
        return this.roles;
    }

    getRole(id:number) : Role{
        return this.roles.find(r => r.roleId === id);
    }
}