import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ava-cfm-dlg',
    templateUrl: 'confirm.html'
})
export class ConfirmComponent implements OnInit {

    @Input() messageDialog: string;
    @Output() onDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void { }

    delete(confirm: boolean) {
        this.onDeleted.emit(confirm);
    }
}