import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { CustomGridComponent } from '../shared/grid/grid.component';
import { CustomGridService } from '../shared/grid/grid.service';
import { FieldSelector } from '../shared/filter/field-selector.filter';

import { ProjectComponent } from './project.component'
import { ProjectDetailsComponent } from './project-details.component'
import { ProjectService } from './project.service'

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule,  RouterModule.forChild([
        { path: 'projects', component: ProjectComponent },
        { path: 'project/:action/:id', component: ProjectDetailsComponent }])],
    declarations: [FieldSelector, CustomGridComponent, ProjectComponent, ProjectDetailsComponent],
    providers: [CustomGridService, ProjectService],
    bootstrap: [ProjectComponent]
})

export class ProjectModule {

}


