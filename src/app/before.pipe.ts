import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'before'
})
export class BeforePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `до ${value}`;
  }

}
