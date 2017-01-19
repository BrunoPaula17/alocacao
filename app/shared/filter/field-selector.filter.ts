import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fieldSelector'})
export class FieldSelector implements PipeTransform {
  transform(obj: Object, key: string): string {
    let keys: string[] = key.split('.');
    let result: Object = obj;

    if (result == null) return '';

    keys.forEach((value, i) =>{
        if (result[value] == null) return '';
        result = result[value];
    });

    return result + '';
  }
}