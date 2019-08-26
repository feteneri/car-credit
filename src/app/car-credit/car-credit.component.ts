import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { carsList } from '../../assets/cars';

@Component({
  selector: 'app-car-credit',
  templateUrl: './car-credit.component.html',
  styleUrls: ['./car-credit.component.scss'],
})
export class CarCreditComponent implements OnInit {
  car: any;
  showPopup: boolean = false;
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      const carId = params['id'];
      this.car = carsList.find(car => car.id === carId);
    });
  }

  ngOnInit() {}
  triggerPopup = () => {
    this.showPopup = !this.showPopup;
  };
}
