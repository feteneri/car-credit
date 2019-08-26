import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rubles',
})
export class RublesPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `${Math.round(value)
      .toString()
      .split('')
      .reduceRight((previousValue, currentValue, index, array) => {
        return index % 3 === 1 ? [...previousValue ,currentValue ,' '] : [...previousValue, currentValue];
      }, [])
      .reverse()
      .join("")} ₽`;
  }
}
