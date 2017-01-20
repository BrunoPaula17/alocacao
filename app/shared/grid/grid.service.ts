import { Injectable, Input } from '@angular/core';
import { Header } from '../grid/grid-header';

@Injectable()
export class CustomGridService<T> {
    @Input()
    models: T[];
    @Input()
    headers: Header[];
    
    @Input()
    public insert: Function;
    @Input()
    public update: Function;
    @Input()
    public delete: Function;
}