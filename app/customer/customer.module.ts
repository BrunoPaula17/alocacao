import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ CustomerComponent ],
    providers: [ CustomerService ],
    bootstrap: [ CustomerComponent ]
})

export class CustomerModule { }