import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-labeled-value',
  templateUrl: './labeled-value.component.html',
  styleUrls: ['./labeled-value.component.scss']
})
export class LabeledValueComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() highlight: boolean;
  //constructor() { }

  ngOnInit() {
  }

}
