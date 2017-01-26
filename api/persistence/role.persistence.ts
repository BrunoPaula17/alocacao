import { Role } from '../../app/role/role';
import { ICrud } from './crud.interface';
import { MongoClient, Db } from 'mongodb';
import { Connection } from './connection';

export class RolePersistence implements ICrud<Role> {
    private _deleted: boolean = true;

    create(role: Role): Promise<Role> {
        let database: Db;
        let roleid: number;

        return Promise.resolve(
            Connection.Create()
            .then((db: Db) => {
                database = db;
                return db.collection('roles').insertOne(role, roleid);
            })
            .then((result) => {
                database.close();
                console.log(result);
                return role;
            }));
    }

    list(): Promise<Role[]> {
        let database: Db;

        return Promise.resolve(
            Connection.Create()
            .then((db: Db) => {
                database = db;
                let teste : any = db.collection('roles').find( { deleted: false }).toArray();
                return teste;
            })
            .then((roles: Role[]) => {
                database.close();
                return roles;

            }));
    }

    read(id: number): Promise<Role> {
        let database: Db;

        return Promise.resolve(
            Connection.Create()
            .then((db: Db) => {
                database = db;
                return db.collection('roles').findOne( { deleted: false,   "roleId": id});
            })
            .then((role: Role) => {
                database.close();
                return role;
            }));
    }

    update(role: Role): Promise<Role> {
        let database: Db;

        return Promise.resolve(
            Connection.Create()
            .then((db: Db) => {
                database = db;
                return db.collection('roles').findOneAndUpdate(
                    { "roleId" : role.roleId },
                    role
                );
            })
            .then((role: Role) => {
                database.close();
                return role;
            }));
    }

    delete(id: number): Promise<boolean> {
        let database: Db;

        return Promise.resolve(
            Connection.Create()
            .then((db: Db) => {
                database = db;
                return db.collection('roles').remove( { roleId: id } );
            })
            .then((result) => {
                database.close();
                return true;
            })
            .catch((erro) => {
                console.log(erro);
                return false;
            }));
    }
}