export interface ICrud<T> {
    //Insert record
    Create(entity: T): Promise<T>;
    //Recovery all entities
    List(): Promise<T[]>;
    //Recovery entity by id
    Read(id: number): Promise<T>;
    //Update entity by id
    Update(entity: T): Promise<T>;
    //Delete entity by id
    Delete(id: number): boolean;
}