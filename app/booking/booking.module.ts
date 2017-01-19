import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PercentualFilter } from '../shared/percentual.filter'

import { BookingComponent } from './booking.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ BookingComponent, PercentualFilter ],
    bootstrap: [ BookingComponent ]
})

export class BookingModule { }