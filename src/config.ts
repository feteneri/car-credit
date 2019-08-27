export interface Config {
  minFirstPaymentCoeff: number;
  maxFirstPaymentCoeff: number;
  firstPaymentValueCoeff: number;
  willPayStep: number;
  minTerm: number;
  maxTerm: number;
  termStep: number;
  creditRate: number;
}

export const config: Config = {
  minFirstPaymentCoeff: 0.1, // минимальное значение первоначального взноса в долях
  maxFirstPaymentCoeff: 0.9, // максимальное значение первоначального взноса в долях
  firstPaymentValueCoeff: 0.5, // значение первоначального взноса по умолчанию в процентах от стоимости
  willPayStep: 50000, // шаг ползунка готов платить
  minTerm: 12, // минимальное значение ползунка срок кредита в месяцах
  maxTerm: 84, // максимальное значение ползунка срок кредита в месяцах
  termStep: 6, // шаг ползунка срок кредита
  creditRate: 12, // процентная ставка
  
};
