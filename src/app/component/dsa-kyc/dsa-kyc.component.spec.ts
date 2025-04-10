import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaKycComponent } from './dsa-kyc.component';

describe('DsaKycComponent', () => {
  let component: DsaKycComponent;
  let fixture: ComponentFixture<DsaKycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsaKycComponent]
    });
    fixture = TestBed.createComponent(DsaKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
