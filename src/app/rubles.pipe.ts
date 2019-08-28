import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rubles',
})
export class RublesPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `${Math.round(value)
      .toString()
      .split('')
      .reverse()
      .reduce((prevChars, currentChar, charIndex) => {
        return charIndex !== 0 && charIndex % 3 === 0
          ? [...prevChars, ' ', currentChar]
          : [...prevChars, currentChar];
      }, [])
      .reverse()
      .join('')} ₽`;
  }
}

