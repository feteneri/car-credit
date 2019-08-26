import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-car-credit-calc',
  templateUrl: './car-credit-calc.component.html',
  styleUrls: ['./car-credit-calc.component.scss'],
})
export class CarCreditCalcComponent implements OnInit {
  calc: CalculatorService;
  @Input() car: any;
  @Input() onSubmit: () => void;
  constructor() {}

  ngOnInit() {
    this.calc = new CalculatorService(this.car.price);
  }
}
