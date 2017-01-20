import { Component, Input } from '@angular/core'
import { Header } from './grid-header'

@Component({
    moduleId: module.id,
    selector: 'ava-grid-app',
    templateUrl: 'grid-list.html'
})

export class CustomGridComponent {
    @Input()
    headers: Header[];
    @Input()
    models: Object[];

    // @Input()
    // edit: Function;
}