import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhoneFilter } from '../shared/phone.filter'

import { ProfessionalComponent } from './professional.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ ProfessionalComponent, PhoneFilter ],
    bootstrap: [ ProfessionalComponent ]
})


export class ProfessionalModule { }