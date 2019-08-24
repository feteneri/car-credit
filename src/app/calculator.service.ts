import { Injectable } from '@angular/core';
import { config, Config } from '../config';

const MONTHS_IN_YEAR = 12;

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  carPrice: number = 0;
  minFirstPayment: number = 0;
  maxFirstPayment: number = 0;
  firstPaymentValue: number = 0;
  firstPaymentStep: number = 0;
  minWillPay: number = 0;
  maxWillPay: number = 0;
  willPayValue: number = 0;
  termValue: number = 0;
  totalSumm: number = 0;
  monthlyPayment: number = 0;
  altValueFirstPay: number = 0;
  altValueTerm: number = 0;

  constructor(carPrice: number) {
    Object.keys(config).forEach(configKey => {
      this[configKey] = config[configKey];
    });
    this.carPrice = carPrice;
    this.minFirstPayment = carPrice * config.minFirstPaymentCoeff;
    this.maxFirstPayment = carPrice * config.maxFirstPaymentCoeff;
    this.firstPaymentValue = Math.round(carPrice * config.firstPaymentValueCoeff);
    this.firstPaymentStep = Math.round((this.maxFirstPayment - this.minFirstPayment) / 10);
    this.altValueFirstPay = (this.firstPaymentValue / carPrice) * 100;
    this.altValueTerm = this.termValue / 12;
    const sum = carPrice - this.firstPaymentValue;
    const percent = config.creditRate / MONTHS_IN_YEAR;
    const getWillPayByMountCount = monthCount =>
      sum * (percent + percent / ((1 + percent) ** monthCount - 1));
    this.minWillPay = getWillPayByMountCount(config.maxTerm);
    this.maxWillPay = getWillPayByMountCount(config.minTerm);
    this.monthlyPayment = getWillPayByMountCount(this.termValue);
    this.totalSumm = Math.round(this.monthlyPayment * this.termValue);
    this.termValue = Math.round((config.maxTerm - config.minTerm) / 2);

    this.willPayValue = Math.round((this.minWillPay + this.maxWillPay) / 2);
    // etc
  }

  onChangeFirstPaymentValue = value => {
    // this.firstPaymentValue = value;
    this.altValueFirstPay = Math.round((value / this.carPrice) * 100);
  };

  onChangeWillPayValue = (value: number) => {
    // this.willPayValue = value;
  };
  
  onChangeTermValue = (value: number) => {
    // this.termValue = value;
  };
}
