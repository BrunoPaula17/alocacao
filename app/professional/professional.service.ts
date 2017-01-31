import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Professional } from './professional';
import 'rxjs/add/operator/toPromise';


const SERVICE_URL: string = '/api/professional'
const HEADERS: Headers = new Headers({
    'Content-Type': 'application/json'
});

@Injectable()
export class ProfessionalService {
    constructor(private _httpService: Http) { }

    getProfessionalList(): Promise<Professional[]> {
        let url: string = `${SERVICE_URL}/list`;
        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Professional[];
            })
            .catch(this.erroHandling);
    }


    getProfessionalRead(pid:number):Promise<Professional>{
        
        let url:string = `${SERVICE_URL}/details/${pid}`;

        return this._httpService.get(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Professional;
                   })
                   .catch(this.erroHandling);
    }

    createProfessional(professional:Professional):Promise<Professional>{
        
        let url:string = `${SERVICE_URL}/insert/`;

        return this._httpService.post(url, {'professional' : JSON.stringify(professional)}, HEADERS)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as  Professional;
                   })
                   .catch(this.erroHandling);
    }

    updateProfessional(professional: Professional):Promise<Professional>{

        let url:string = `${SERVICE_URL}/update/`;

        return this._httpService.put(url, {'professional': JSON.stringify(professional)}, HEADERS)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Professional;
                   })
                   .catch(this.erroHandling);
    }

    deleteProfessional(pid:number):Promise<Professional>{

        let url:string = `${SERVICE_URL}/delete/${pid}`;

        return this._httpService.delete(url)
                   .toPromise()
                   .then((response: Response) => {
                       return response.json() as Professional;
                   })
                   .catch(this.erroHandling);
    }

    erroHandling(error: any) { console.log(error.message || error); }


}