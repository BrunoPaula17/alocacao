import { Component } from '@angular/core'
import { Professional } from './professional'

@Component({
    selector: 'ava-pro-app',
    templateUrl: './app/professional/professional.html'
})

export class ProfessionalComponent {
    model: Professional = {
            "pageName": "Profissional",
            "pid": 10715376,
            "eid": "ronye.peterson.anjos",
            "name": "Ronye Anjos",
            "email": "ronye.peterson.anjos@avanade.com",
            "roleID":10,
            "prefix": 11,
            "phone": 971537512
        };
}