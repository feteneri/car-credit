import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rubles',
})
export class RublesPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `${Math.round(value)} ₽`;
  }
}
