import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'from'
})
export class FromPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
        return `от ${value}`;
      }
    }
