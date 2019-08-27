import { Injectable } from '@angular/core';
import { config, Config } from '../config';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const MONTHS_IN_YEAR = 12;

const getBaseLog = (x: number, y: number): number => Math.log(y) / Math.log(x);

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
  termStep: number = 0;
  totalSumm: number = 0;
  monthlyPayment: number = 0;
  altValueFirstPay: number = 0;
  target: number = 0;

  constructor(carPrice: number) {
    this.carPrice = carPrice;
    this.creditRate = config.creditRate;
    this.minTerm = config.minTerm;
    this.maxTerm = config.maxTerm;
    this.termStep = config.termStep;
    this.firstPaymentValue = Math.round(carPrice * config.firstPaymentValueCoeff);
    this.updateTermValue();
    this.updateMonthlyPayment();
    this.updateWillPayRange();
    this.updateTotalSumm();

    this.minFirstPayment = carPrice * config.minFirstPaymentCoeff;
    this.maxFirstPayment = carPrice * config.maxFirstPaymentCoeff;
    this.firstPaymentStep = carPrice / 10;
    this.altValueFirstPay = (this.firstPaymentValue / carPrice) * 100;
  }

  /* change handlers */
  getBaseLog = (x: number, y: number): number => Math.log(y) / Math.log(x);

  onChangeFirstPaymentValue = value => {
    console.log('onChangeFirstPaymentValue');
    this.firstPaymentValue = value;
    this.updateMonthlyPayment();
    this.updateWillPayRange();
    this.updateTotalSumm();
    this.altValueFirstPay = Math.round((value / this.carPrice) * 100);
  };

  onChangeWillPayValue = (value: number) => {
    this.willPayValue = value;
    this.termValue = this.getTermByMonthlyPayment();
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

  getMonthlyPercent = () => 1 + config.creditRate / MONTHS_IN_YEAR / 100;

  getMonthlyPayment = (monthCount: number) => {
    const summ = this.getCreditSumm();
    const percent = this.getMonthlyPercent();
    return percent ** monthCount * ((percent - 1) / (percent ** monthCount - 1))*summ;
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

  getTermByMonthlyPayment = () => {
    const summ = this.getCreditSumm();
    const percent = this.getMonthlyPercent();
    return Math.round(getBaseLog
      (1.01,(1+(0.01/((this.willPayValue/summ)-0.01))))
    );
  };

  /* end: calculations */
}
