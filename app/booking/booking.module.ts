import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PercentualFilter } from '../shared/percentual.filter'

import { BookingComponent } from './booking.component';
import { BookingDetail } from './booking-details.component';
import { BookingService } from './booking.service';

import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ BookingComponent,
                    BookingDetail,
                    PercentualFilter, 
                    HeaderComponent ],
    providers: [ BookingService ],
    bootstrap: [ BookingComponent ]
})

export class BookingModule { }