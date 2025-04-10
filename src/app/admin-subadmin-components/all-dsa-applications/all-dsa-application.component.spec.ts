import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDsaApplicationComponent } from './all-dsa-application.component';

describe('DsaApplicationComponent', () => {
  let component: AllDsaApplicationComponent;
  let fixture: ComponentFixture<AllDsaApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDsaApplicationComponent]
    });
    fixture = TestBed.createComponent(AllDsaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
