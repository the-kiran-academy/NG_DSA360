import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSystemUserKycComponent } from './all-system-user-kyc.component';

describe('AllSystemUserKycComponent', () => {
  let component: AllSystemUserKycComponent;
  let fixture: ComponentFixture<AllSystemUserKycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSystemUserKycComponent]
    });
    fixture = TestBed.createComponent(AllSystemUserKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
