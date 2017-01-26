import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { RoleComponent } from './role.component';
import { RoleDetailComponent } from './role-details.component';
import { RoleService } from './role.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [BrowserModule,
              SharedModule,
              FormsModule,
        RouterModule.forChild([
            { path: "roles", component: RoleComponent},
            { path: "role/:action", component: RoleDetailComponent},
            { path: "role/:action/:id", component: RoleDetailComponent}
    ])],
    declarations: [RoleComponent,
        RoleDetailComponent],
    providers: [RoleService]
})

export class RoleModule { }