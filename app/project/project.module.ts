import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProjectComponent } from './project.component'

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ ProjectComponent ],
    bootstrap: [ ProjectComponent ]
})

export class ProjectModule { }