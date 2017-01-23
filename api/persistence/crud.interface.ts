export interface ICrud<T> {
    //Insert record
    Create(entity: T): T;
    //Recovery all entities
    List(): T[];
    //Recovery entity by id
    Read(id: number): T;
    //Update entity by id
    Update(entity: T): T;
    //Delete entity by id
    Delete(id: number): boolean;
}