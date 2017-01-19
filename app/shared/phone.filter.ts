import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'telephone' })
export class PhoneFilter implements PipeTransform{
    transform(value:string) {
        return value.substr(0, 5) + "-" + value.substr(5, 9);
    }
}
