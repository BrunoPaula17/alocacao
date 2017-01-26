export interface ICrud<T> {
    //Insert record
    create(entity: T): Promise<T>;
    //Recovery all entities
    list(): Promise<T[]>;
    //Recovery entity by id
    read(id: number): Promise<T>;
    //Update entity by id
    update(entity: T): Promise<T>;
    //Delete entity by id
    delete(id: number): boolean;
}