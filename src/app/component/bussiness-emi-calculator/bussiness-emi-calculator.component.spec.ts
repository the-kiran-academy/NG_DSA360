import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessEmiCalculatorComponent } from './bussiness-emi-calculator.component';

describe('BussinessEmiCalculatorComponent', () => {
  let component: BussinessEmiCalculatorComponent;
  let fixture: ComponentFixture<BussinessEmiCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussinessEmiCalculatorComponent]
    });
    fixture = TestBed.createComponent(BussinessEmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
