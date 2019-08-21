import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreditCalcComponent } from './car-credit-calc.component';

describe('CarCreditCalcComponent', () => {
  let component: CarCreditCalcComponent;
  let fixture: ComponentFixture<CarCreditCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCreditCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCreditCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
