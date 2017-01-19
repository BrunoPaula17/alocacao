import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoleService } from './role.service';

import { RoleComponent } from './role.component';
import { RoleDetailComponent } from './role-details.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ RoleComponent,
                    HeaderComponent,
                    RoleDetailComponent ],
    providers: [ RoleService ],
    bootstrap: [RoleComponent]
})

export class RoleModule{}