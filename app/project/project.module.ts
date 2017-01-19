import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { FieldSelector } from '../shared/field.filter.selector';

import { ProjectComponent } from './project.component'
import { ProjectFormComponent } from './project.form.component'
import { ProjectListComponent } from './project.list.component'

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ FieldSelector, ProjectComponent, ProjectFormComponent, ProjectListComponent ],
    bootstrap: [ ProjectComponent ]
})

export class ProjectModule {
    
 }


