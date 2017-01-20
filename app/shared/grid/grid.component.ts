import { Component, Input } from '@angular/core'
import { Header } from './grid-header'

import { CustomGridService } from './grid.service';

@Component({
    moduleId: module.id,
    selector: 'ava-grid-app',
    templateUrl: 'grid-list.html'
})

export class CustomGridComponent {
    constructor (private _gridService: CustomGridService<Object>){ }

    @Input()
    headers: Header[];
    @Input()
    models: Object[];

}