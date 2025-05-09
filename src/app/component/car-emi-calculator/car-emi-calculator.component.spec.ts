import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEmiCalculatorComponent } from './car-emi-calculator.component';

describe('CarEmiCalculatorComponent', () => {
  let component: CarEmiCalculatorComponent;
  let fixture: ComponentFixture<CarEmiCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarEmiCalculatorComponent]
    });
    fixture = TestBed.createComponent(CarEmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
