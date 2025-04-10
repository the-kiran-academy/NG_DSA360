import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEmiCalculatorComponent } from './personal-emi-calculator.component';

describe('PersonalEmiCalculatorComponent', () => {
  let component: PersonalEmiCalculatorComponent;
  let fixture: ComponentFixture<PersonalEmiCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalEmiCalculatorComponent]
    });
    fixture = TestBed.createComponent(PersonalEmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
