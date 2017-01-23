import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router'
import { CustomerComponent } from './customer.component'
import { CustomerDetailsComponent } from './customer-details.component'
import { CustomerService } from './customer.service'
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [BrowserModule, SharedModule, RouterModule.forChild([
            { path: 'customers', component: CustomerComponent },
            { path: 'customer/:id', component: CustomerDetailsComponent}
        ])],
    declarations: [CustomerComponent, CustomerDetailsComponent],
    providers: [CustomerService]
})

export class CustomerModule { }