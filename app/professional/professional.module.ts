import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { PhoneFilter } from '../shared/filter/phone.filter';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalDetailComponent } from './professional-detail.component';
import { RouterModule, Router} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfessionalService } from './professional.service';


@NgModule({
    imports: [ BrowserModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
        {path:'professionals',component:ProfessionalComponent},
        {path:'professional/:action/:pid',component: ProfessionalDetailComponent}],
    ),
    FormsModule],
    declarations: [ ProfessionalComponent,
    ProfessionalDetailComponent, 
    PhoneFilter],
    providers: [ProfessionalService],
    bootstrap: [ ProfessionalComponent]
})


export class ProfessionalModule { }