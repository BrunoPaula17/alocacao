import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
moduleId: module.id,
selector: 'ava-cust-dtl-app',
templateUrl: 'customer-details.html'
})

export class CustomerDetailsComponent{
    
    @Input() customer:Customer;

}
