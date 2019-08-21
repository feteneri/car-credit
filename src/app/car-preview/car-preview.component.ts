import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-preview',
  templateUrl: './car-preview.component.html',
  styleUrls: ['./car-preview.component.scss'],
})
export class CarPreviewComponent implements OnInit {
  @Input() car: any;
  // constructor() {}

  ngOnInit() {}
}
