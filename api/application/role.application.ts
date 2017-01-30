import { Role } from '../../app/role/role';
import { RolePersistence } from '../persistence/role.persistence';

export class RoleApplication {
    listRoles(): Promise<Role[]> {
        let rolePersistence: RolePersistence = new RolePersistence();
         
        return rolePersistence.list();
    }

    readRole(id: number): Promise<Role>{
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.read(id);
    }

    deleteRole(role: Role): Promise<boolean>{
        let rolePersistence: RolePersistence = new RolePersistence();        

        return rolePersistence.delete(role);
    }

    updateRole(role: Role): Promise<Role>{
        let rolePersistence: RolePersistence = new RolePersistence();
        
        return rolePersistence.update(role);
    }

    createRole(role: Role): Promise<Role>{
        let rolePersistence: RolePersistence = new RolePersistence();

        role.deleted = false;

        return rolePersistence.create(role);
    }
}