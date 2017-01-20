import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PercentualFilter } from '../shared/percentual.filter'
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component'
import { BookingDetailComponent } from './booking-details.component';
import { BookingService } from './booking.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
     imports: [BrowserModule,
               SharedModule,
        RouterModule.forChild([
            { path: 'bookings', component: BookingComponent },
            { path: 'booking/:id', component: BookingDetailComponent }
        ])],
     declarations: [PercentualFilter,
                    BookingComponent,
                    BookingDetailComponent,
                    PercentualFilter],
     providers: [BookingService],
})

export class BookingModule { }