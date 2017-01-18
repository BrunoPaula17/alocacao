import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'telephone' })
export class PhoneFilter implements PipeTransform{
    transform(value:string) {
        return value;
    }
}
