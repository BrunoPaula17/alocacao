import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhoneFilter } from '../shared/phone.filter'

import { ProfessionalComponent } from './professional.component'
import { ProfessionalDetail } from './professional-details.component';
import { ProfessionalService } from './Professional.service';

import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ ProfessionalComponent, 
                    ProfessionalDetail, 
                    PhoneFilter,
                    HeaderComponent ],
    providers: [ ProfessionalService ],
    bootstrap: [ ProfessionalComponent ]
})

export class ProfessionalModule { }