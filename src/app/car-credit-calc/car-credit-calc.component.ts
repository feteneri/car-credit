import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-car-credit-calc',
  templateUrl: './car-credit-calc.component.html',
  styleUrls: ['./car-credit-calc.component.scss'],
})
export class CarCreditCalcComponent implements OnInit {
  calc: CalculatorService;
  constructor() {
    this.calc = new CalculatorService(5130000);
  }

  ngOnInit() {}
}
