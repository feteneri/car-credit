import { Pipe, PipeTransform } from '@angular/core';

const pluralize = (val, options) => {
  const parsedVal = parseInt(val.toString().replace(/ /g, ''), 10);
  const modulo = parsedVal % 10;
  let text = options.other;
  if (options[1] && modulo === 1 && parsedVal % 100 !== 11) {
    text = options[1];
  }
  if (options[2] && modulo >= 2 && modulo <= 4) {
    text = options[2];
  }
  if (parsedVal % 100 <= 20 && parsedVal % 100 >= 10) {
    text = options.other;
  }
  return text;
};

@Pipe({
  name: 'period',
})
export class PeriodPipe implements PipeTransform {
  transform(months: number, ...args: any[]): any {
    const monthsInYear = 12;
    const fullYears = Math.floor(months / monthsInYear);
    const yearsText = `${fullYears} ${pluralize(fullYears, { 1: 'год', 2: 'года', other: 'лет' })}`;
    const monthsReminds = months % monthsInYear;
    const monthsText = `${monthsReminds} ${pluralize(monthsReminds, {
      1: 'месяц',
      2: 'месяца',
      other: 'месяцев',
    })}`;
    return `${fullYears > 0 ? `${yearsText} ` : ''}${monthsReminds > 0 ? `${monthsText} ` : ''}`;
  }
}
