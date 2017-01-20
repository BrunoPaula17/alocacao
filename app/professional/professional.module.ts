import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhoneFilter } from '../shared/phone.filter';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalDetailComponent } from './professional-detail.component';
import { RouterModule, Router} from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { ProfessionalService } from './professional.service'


@NgModule({
    imports: [ BrowserModule,
    RouterModule.forChild([
        {path:'professionals',component:ProfessionalComponent}
    ])],
    declarations: [ ProfessionalComponent,
    ProfessionalDetailComponent, 
    PhoneFilter,
    HeaderComponent],
    providers: [ProfessionalService],
    bootstrap: [ ProfessionalComponent]
})


export class ProfessionalModule { }