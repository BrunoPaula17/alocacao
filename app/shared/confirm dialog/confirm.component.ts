import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ava-cfm-dlg',
    templateUrl: 'confirm.html'
})
export class ConfirmComponent implements OnInit {

    @Input() messageDialog: string;
    @Input() idConfirm: string;
    @Input() titleDialog: string;
    @Output() onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void { }

    confirm(confirm: boolean) {
        this.onConfirm.emit(confirm);
    }
}