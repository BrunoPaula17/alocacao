import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PercentualFilter } from '../shared/percentual.filter'

<<<<<<< HEAD
import { BookingComponent } from './booking.component';
import { BookingDetailComponent } from './booking-details.component';
import { BookingService } from './booking.service';

import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ BookingComponent,
                    BookingDetailComponent,
                    PercentualFilter, 
                    HeaderComponent ],
    providers: [ BookingService ],
=======
import { BookingComponent } from './booking.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ BookingComponent, PercentualFilter ],
>>>>>>> 8be35f1ea8da0f06064e747825b664a6be95ffaa
    bootstrap: [ BookingComponent ]
})

export class BookingModule { }