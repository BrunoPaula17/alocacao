import { Role } from '../../app/role/role';
import { RolePersistence } from '../persistence/role.persistence';

export class RoleApplication {
    getRoles(): Role[] {
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.getRoles();
    }

    getRole(id: number): Role{
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.getRole(id);
    }
}