import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CustomGridComponent } from '../shared/grid/grid.component';
import { CustomGridService } from '../shared/grid/grid.service';
import { FieldSelector } from '../shared/filter/field-selector.filter';

import { ProjectComponent } from './project.component'
import { ProjectDetailsComponent } from './project-details.component'

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ FieldSelector, CustomGridComponent, ProjectComponent, ProjectDetailsComponent ],
    providers: [CustomGridService],
    bootstrap: [ ProjectComponent ]
})

export class ProjectModule {
    
 }


