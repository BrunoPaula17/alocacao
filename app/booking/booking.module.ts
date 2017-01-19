import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PercentualFilter } from '../shared/percentual.filter'
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingDetailComponent } from './booking-details.component';
import { BookingService } from './booking.service';

import { HeaderComponent } from '../shared/header/header.components';

@NgModule({
    imports: [BrowserModule,
        RouterModule.forChild([
            { path: 'bookings', component: BookingComponent }
        ])],
    declarations: [BookingComponent,
        BookingDetailComponent,
        PercentualFilter,
        HeaderComponent],
    providers: [BookingService],
    bootstrap: [BookingComponent]
})

export class BookingModule { }