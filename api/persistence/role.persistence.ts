import { Role } from '../../app/role/role';
import { ICrud } from './crud.interface';
import { MongoClient, Db } from 'mongodb';
import { Connection } from './connection';

export class RolePersistence implements ICrud<Role> {
    private _deleted: boolean = true;
    private _db: Db;

    create(role: Role): Promise<Role> {
        let database: Db;

        return Promise.resolve(
            Connection.create()
            .then((db: Db) => {
                this._db = db;
                
                this._db.collection('roles').insertOne({
                    roleId: role.roleId,
                    name: role.name,
                    brc: role.brc,
                    level: role.level,
                    description: role.description,
                    deleted: false
                });

            })
            .then(() => {
                this._db.close;
                return role;
            })
            .catch(() => {
                console.log('Error');
                this._db.close;
            })
            );
    }

    list(): Promise<Role[]> {
        let database: Db;

        return Promise.resolve(
            Connection.create()
            .then((db: Db) => {
                this._db = db;
                return this._db.collection('roles').find( { deleted: false }).toArray();;
            })
            .then((roles: Role[]) => {
                this._db.close();
                return roles;
            }));
    }

    read(id: number): Promise<Role> {
        let database: Db;

        return Promise.resolve(
            Connection.create()
            .then((db: Db) => {
                database = db;
                return db.collection('roles').findOne({ deleted: false, roleId: id});
            })
            .then((role: Role) => {
                database.close();
                return role;
        }));
    }

    update(role: Role): Promise<Role> {
        let database: Db;

        return Promise.resolve(
            Connection.create()
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
            Connection.create()
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