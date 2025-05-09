import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmiCalculatorComponent } from './home-emi-calculator.component';

describe('HomeEmiCalculatorComponent', () => {
  let component: HomeEmiCalculatorComponent;
  let fixture: ComponentFixture<HomeEmiCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEmiCalculatorComponent]
    });
    fixture = TestBed.createComponent(HomeEmiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
