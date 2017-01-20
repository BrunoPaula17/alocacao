import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhoneFilter } from '../shared/phone.filter';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalDetailComponent } from './professional-detail.component';
import { RouterModule, Router} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfessionalService } from './professional.service'


@NgModule({
    imports: [ BrowserModule,
    SharedModule,
    RouterModule.forChild([
        {path:'professionals',component:ProfessionalComponent},
        {path:'professional/:id',component: ProfessionalDetailComponent}

    ])],
    declarations: [ ProfessionalComponent,
    ProfessionalDetailComponent, 
    PhoneFilter],
    providers: [ProfessionalService],
    bootstrap: [ ProfessionalComponent]
})


export class ProfessionalModule { }