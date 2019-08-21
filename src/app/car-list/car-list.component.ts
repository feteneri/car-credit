import { Component, OnInit } from '@angular/core';
import { carsList } from '../../assets/cars';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  cars = carsList;
  constructor() {}

  ngOnInit() {}
}
