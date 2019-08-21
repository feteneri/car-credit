import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCreditComponent } from './car-credit.component';

describe('CarCreditComponent', () => {
  let component: CarCreditComponent;
  let fixture: ComponentFixture<CarCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
