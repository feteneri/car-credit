import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-range',
  templateUrl: './credit-range.component.html',
  styleUrls: ['./credit-range.component.scss'],
})
export class CreditRangeComponent implements OnInit {
  @Input() title: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Input() units: string;
  @Input() altValue?: number;
  @Input() onChange: (value: number) => {};
  constructor() {}

  ngOnInit() {}
}
