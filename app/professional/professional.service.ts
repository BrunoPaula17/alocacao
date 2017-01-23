import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Professional } from "./professional";
import { PROFESSIONALS } from "../shared/mock"


const SERVICE_URL:string = '/api/professional'

@Injectable()
export class ProfessionalService {

    constructor(private _httpService: Http) {}

    getProfessionalList():Promise<Professional[]>{

        let url:string = `{$SERVICE_URL}/list`;

        return this._httpService.get(url)
                   .toPromise()
                   .then((response:Response) => {
                       return response.json() as Professional[];
                   })
                   .catch(this.erroHandling);

    }

    getProfessional(pid:number):Promise<Professional>{
        
        let url:string = `{$SERVICE_URL}/${pid}`;

        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Professional;
                   })
                   .catch(this.erroHandling);
    }

    insertProfessional(pid:number,eid:string,name:string,email:string,roleID:number,prefix:number,phone:string):Promise<Professional>{
        
        let url:string = `{$SERVICE_URL}/insert/${pid}/${eid}/${name}/${email}/${roleID}/${prefix}/${phone}`;

        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as  Professional;
                   })
                   .catch(this.erroHandling);
    }

    updateProfessional(pid:number,eid:string,name:string,email:string,roleID:number,prefix:number,phone:string):Promise<Professional>{

        let url:string = `{$SERVICE_URL}/update/${pid}/${eid}/${name}/${email}/${roleID}/${prefix}/${phone}`;

        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Professional;
                   })
                   .catch(this.erroHandling);
    }

    deleteProfessional(pid:number):Promise<Professional>{

        let url:string = `{$SERVICE_URL}/delete/${pid}`;

        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Professional;
                   })
                   .catch(this.erroHandling);
    }

    erroHandling(error: any) { console.log(error.message || error); }


}