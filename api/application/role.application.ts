import { Role } from '../../app/role/role';
import { RolePersistence } from '../persistence/role.persistence';

export class RoleApplication {
    ListRoles(): Role[] {
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.List();
    }

    ReadRole(id: number): Role{
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.Read(id);
    }

    DeleteRole(id: number): boolean{
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.Delete(id);
    }

    UpdateRole(role: Role): Role{
        let rolePersistence: RolePersistence = new RolePersistence();
        
        return rolePersistence.Update(role);
    }

    CreateRole(role: Role): Role{
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.Create(role);
    }
}