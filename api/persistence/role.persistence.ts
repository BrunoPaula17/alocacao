import { Role } from '../../app/role/role';
import { ICrud } from './crud.interface';
import { MongoClient, Db, InsertOneWriteOpResult, FindAndModifyWriteOpResultObject } from 'mongodb';
import { Connection } from './connection';

export class RolePersistence implements ICrud<Role> {
    private _deleted: boolean = true;
    private _db: Db;

    create(role: Role): Promise<Role> {
        let database: Db;
        let sequence: number;

        return Promise.resolve<Role>(
            Connection.getNextSequence('RoleId')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.create();
                })
                .then((db: Db) => {
                    database = db;

                    return db.collection('roles').insertOne({
                        roleId: sequence,
                        name: role.name,
                        brc: role.brc,
                        level: role.level,
                        description: role.description,
                        deleted: role.deleted
                    })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        role.roleId = sequence;

                        return role;
                    }
                    else {
                        return Promise.reject<Role>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }

    list(): Promise<Role[]> {
        let database: Db;

        return Promise.resolve(
            Connection.create()
                .then((db: Db) => {
                    this._db = db;
                    return this._db.collection('roles').find({ deleted: false }).toArray();;
                })
                .then((roles: Role[]) => {
                    this._db.close();
                    return roles;
                }));
    }

    read(id: number): Promise<Role> {
        let database: Db;

        return Promise.resolve<Role>(
            Connection.create()
                .then((db: Db) => {
                    database = db;
                    return db.collection('roles').findOne({ deleted: false, roleId: id });
                })
                .then((role: any) => {
                    database.close();
                    return role as Role;
                }));
    }

    update(role: Role): Promise<Role> {
        let database: Db;
        let sequence: number;

        return Promise.resolve<Role>(
            Connection.create()
                .then((db: Db) => {
                    database = db;

                    return db.collection('roles').findOneAndUpdate(
                        { roleId: role.roleId },
                        {
                            roleId: role.roleId,
                            name: role.name,
                            brc: role.brc,
                            level: role.level,
                            description: role.description,
                            deleted: role.deleted
                        })
                })
                .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    if (updateResult.ok === 1)
                        return updateResult.value.role;
                    else
                        return Error("An error ocurred while retrieving updated sequence");
                }));
    }

    delete(idRole: number): Promise<boolean> {
        let database: Db;
        return Connection.create()
            .then((db: Db) => {
                database = db;

                return db.collection('roles').findOneAndUpdate(
                    { roleId: idRole },
                    { $set: { 'deleted': true } });
            })
    }
}