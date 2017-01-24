import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Role } from './role';

import 'rxjs/add/operator/toPromise';

const SERVICE_URL: string = '/api/role'

@Injectable()
export class RoleService {
    constructor(private _httpService: Http) { }

    getRoleList(): Promise<Role[]> {
        let url: string = `${SERVICE_URL}/list`;

        return this._httpService.get(url)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Role[]
        })
        .catch(this.erroHandling);
    }

    getRoleId(id: number): Promise<Role> {
        let url: string = `${SERVICE_URL}/read/${id}`;

        return this._httpService.get(url)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Role
        })
        .catch(this.erroHandling);
    }

    createRole(role: Role): Promise<Role> {
        let url: string = `${SERVICE_URL}/create/`;

        return this._httpService.post(url, role)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Role
        })
        .catch(this.erroHandling);
    }

    deleteRole(id: number): Promise<Role>{
        let url: string = `${SERVICE_URL}/delete/${id}`;

        return this._httpService.delete(url)
        .toPromise()
        .then((response: Response) => {
           return  response.json() as Role
        })
        .catch(this.erroHandling);   
    }
    
    updateRole(role: Role): Promise<Role> {
        let url: string = `${SERVICE_URL}/create/${role.roleId}`;

        return this._httpService.put(url, role)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Role
        })
        .catch(this.erroHandling);
    }

    erroHandling(error: any) { 
        console.log(error.message || error); 
    }
}