import { Component } from '@angular/core';
import { Professional } from './professional';
import { PROFESSIONALS } from '../shared/mock';

@Component({
    selector: 'ava-pro-app',
    templateUrl: './app/professional/professional.html'
})

export class ProfessionalComponent {
    professional: Professional[] = PROFESSIONALS;
    pageName:string = "Profissional";
}

