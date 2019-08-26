import { Component, OnInit } from '@angular/core';
import { carsList } from '../../assets/cars';

@Component({
  selector: 'app-car-credit',
  templateUrl: './car-credit.component.html',
  styleUrls: ['./car-credit.component.scss'],
})
export class CarCreditComponent implements OnInit {
  car = carsList[1];
  showPopup = false;
  constructor() {
  }

  ngOnInit() {}
  triggerPopup = () => {
    this.showPopup = !this.showPopup;
  };
}
