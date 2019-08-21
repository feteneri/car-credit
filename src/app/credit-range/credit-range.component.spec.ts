import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRangeComponent } from './credit-range.component';

describe('CreditRangeComponent', () => {
  let component: CreditRangeComponent;
  let fixture: ComponentFixture<CreditRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
