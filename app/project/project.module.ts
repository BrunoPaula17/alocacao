import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProjectComponent } from './project.component'
import { ProjectFormComponent } from './project.form.component'

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ ProjectComponent, ProjectFormComponent ],
    bootstrap: [ ProjectComponent ]
})

export class ProjectModule { }