import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BookingModule } from './booking/booking.module';
import { ProfessionalModule } from './professional/professional.module';
import { ProjectModule } from './project/project.module';
import { CustomerModule } from './customer/customer.module';
import { RoleModule } from './role/role.module'; 
import { SharedModule } from './shared/shared.module';

import { WelcomeComponent } from './welcome.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, 
        BookingModule, 
        ProjectModule, 
        CustomerModule,
        SharedModule,
        ProfessionalModule, 
        RoleModule,
        HttpModule,
        RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo:'/welcome', pathMatch:'full' }
    ])],
    declarations: [AppComponent, WelcomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}