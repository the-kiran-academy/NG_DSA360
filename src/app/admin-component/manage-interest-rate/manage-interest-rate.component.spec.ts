import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInterestRateComponent } from './manage-interest-rate.component';

describe('ManageInterestRateComponent', () => {
  let component: ManageInterestRateComponent;
  let fixture: ComponentFixture<ManageInterestRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInterestRateComponent]
    });
    fixture = TestBed.createComponent(ManageInterestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
