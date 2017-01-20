import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { RoleComponent } from './role.component';
import { RoleDetailComponent } from './role-details.component';
import { RoleService } from './role.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [BrowserModule,
              SharedModule,
        RouterModule.forChild([
            { path: "roles", component: RoleComponent}
    ])],
    declarations: [RoleComponent,
        RoleDetailComponent],
    providers: [RoleService]
})

export class RoleModule { }