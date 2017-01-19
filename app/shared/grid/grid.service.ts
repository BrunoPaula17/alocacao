import { Injectable, Input } from '@angular/core';
import { Header } from '../grid/grid-header';

@Injectable()
export class CustomGridService<T> {
    @Input()
    models: T[];

    @Input()
    headers: Header[];
}