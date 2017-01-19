import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ava-hdr-app',
    templateUrl: 'header.html'
})
export class HeaderComponent {
    @Input() pageName: string;
}