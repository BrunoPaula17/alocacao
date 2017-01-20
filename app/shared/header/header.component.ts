import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ava-hdr-app',
    templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {
    
    @Input() pageName: string;
    @Input() icon: string;
             iconClass: string;

    ngOnInit(): void {
        this.iconClass = `fa ${this.icon}`;
    }
}