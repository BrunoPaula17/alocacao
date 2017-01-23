import { Role } from '../../app/role/role';
import { ICrud } from './crud.interface';

export class RolePersistence implements ICrud<Role> {
    private _deleted: boolean = true;
    private roles: Role[] = [
        {
            "roleId": 1,
            "name": "Associate Software Engineer",
            "brc": "2017SE",
            "level": 12,
            "description": "Initial software development",
            "deleted": false
        },
        {
            "roleId": 2,
            "name": "Software Engineer",
            "brc": "2017SE2",
            "level": 11,
            "description": "Software development",
            "deleted": false
        },
        {
            "roleId": 3,
            "name": "Senior Software Engineer",
            "brc": "2017SES",
            "level": 10,
            "description": "Senior software development",
            "deleted": false
        },
        {
            "roleId": 4,
            "name": "System Analyst",
            "brc": "2017SA",
            "level": 9,
            "description": "Role`s description",
            "deleted": false
        },
        {
            "roleId": 5,
            "name": "Senior System Analyst",
            "brc": "2017SSA",
            "level": 8,
            "description": "Role`s description",
            "deleted": false
        }
    ];

    Create(role: Role): Role {
        this.roles.push(role);
        return role;
    }

    List(): Role[] {
        return this.roles.filter(r => r.deleted != this._deleted);
    }

    Read(id: number): Role {
        return this.roles.find(r => r.roleId === id && r.deleted != this._deleted);
    }

    Update(role: Role): Role {
        let _role: Role = this.roles.find(r => r.roleId === role.roleId);
        if (_role != null) {
            _role = role;
            return _role;
        }
        else
            return null;
    }

    Delete(id: number): boolean {
        let _role: Role = this.roles.find(r => r.roleId === id);
        if (_role != null) {
            _role.deleted = true;
            return true;
        }
        else
            return false;
    }
}