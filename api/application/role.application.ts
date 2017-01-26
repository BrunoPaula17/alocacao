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

    deleteRole(id: number): Promise<boolean>{
        let rolePersistence: RolePersistence = new RolePersistence();        

        return rolePersistence.delete(id);
    }

    updateRole(role: Role): Promise<Role>{
        let rolePersistence: RolePersistence = new RolePersistence();
        
        return rolePersistence.update(role);
    }

    createRole(role: Role): Promise<Role>{
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.create(role);
    }
}