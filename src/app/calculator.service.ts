import { Injectable } from '@angular/core';
import { config, Config } from '../config';

const MONTHS_IN_YEAR = 12;

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  carPrice: number = 0;
  creditRate: number = 0;
  minFirstPayment: number = 0;
  maxFirstPayment: number = 0;
  firstPaymentValue: number = 0;
  firstPaymentStep: number = 0;
  minWillPay: number = 0;
  maxWillPay: number = 0;
  willPayValue: number = 0;
  termValue: number = 0;
  maxTerm: number = 0;
  minTerm: number = 0;
  totalSumm: number = 0;
  monthlyPayment: number = 0;
  altValueFirstPay: number = 0;
  altValueTerm: number = 0;

  constructor(carPrice: number) {
    this.carPrice = carPrice;
    this.creditRate = config.creditRate;
    this.minTerm = config.minTerm;
    this.maxTerm = config.maxTerm;
    this.updateTermValue();
    this.updateMonthlyPayment();
    this.updateWillPayRange();
    this.updateTotalSumm();

    this.minFirstPayment = carPrice * config.minFirstPaymentCoeff;
    this.maxFirstPayment = carPrice * config.maxFirstPaymentCoeff;
    this.firstPaymentValue = Math.round(carPrice * config.firstPaymentValueCoeff);
    this.firstPaymentStep = Math.round((this.maxFirstPayment - this.minFirstPayment) / 10);
    this.altValueFirstPay = (this.firstPaymentValue / carPrice) * 100;
    this.altValueTerm = this.termValue / 12;
  }

  /* change handlers */
  onChangeFirstPaymentValue = value => {
    this.firstPaymentValue = value;
    this.updateMonthlyPayment();
    this.updateWillPayRange();
    this.updateTotalSumm();
    this.altValueFirstPay = Math.round((value / this.carPrice) * 100);
  };

  onChangeWillPayValue = (value: number) => {
    this.willPayValue = value;
  };

  onChangeTermValue = (value: number) => {
    this.termValue = value;
    this.updateMonthlyPayment();
    this.updateWillPayRange();
    this.updateTotalSumm();
  };
  /* end: change handlers */

  /* calculations */

  updateTermValue = () => {
    this.termValue = Math.round((config.maxTerm - config.minTerm) / 2);
  };

  getCreditSumm = () => this.carPrice - this.firstPaymentValue;

  getMonthlyPercent = () => config.creditRate / MONTHS_IN_YEAR / 100;

  getMonthlyPayment = (mountCount: number) => {
    const sum = this.getCreditSumm();
    const percent = this.getMonthlyPercent();
    return sum * (percent + percent / ((1 + percent) ** mountCount - 1));
  };

  updateMonthlyPayment = () => {
    this.monthlyPayment = this.getMonthlyPayment(this.termValue);
  };

  getWillPayRange = () => {
    const minWillPay = this.getMonthlyPayment(config.maxTerm);
    const maxWillPay = this.getMonthlyPayment(config.minTerm);
    const willPayValue = this.getMonthlyPayment(this.termValue);
    return { minWillPay, maxWillPay, willPayValue };
  };

  updateWillPayRange = () => {
    const { minWillPay, maxWillPay, willPayValue } = this.getWillPayRange();
    this.minWillPay = minWillPay;
    this.maxWillPay = maxWillPay;
    this.willPayValue = willPayValue;
  };

  getTotalSumm = () => this.monthlyPayment * this.termValue;

  updateTotalSumm = () => {
    this.totalSumm = this.getTotalSumm();
  };

  /* end: calculations */
}
