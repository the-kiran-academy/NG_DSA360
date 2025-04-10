import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemUserKycComponent } from './system-user-kyc.component';

describe('SystemUserKycComponent', () => {
  let component: SystemUserKycComponent;
  let fixture: ComponentFixture<SystemUserKycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemUserKycComponent]
    });
    fixture = TestBed.createComponent(SystemUserKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
