import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'percentual' })
export class PercentualFilter implements PipeTransform {
    transform(value: number): string {
        return Math.round(value * 100).toString() + "%";
    }
}