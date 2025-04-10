import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaApplicationComponent } from './dsa-application.component';

describe('DsaApplicationComponent', () => {
  let component: DsaApplicationComponent;
  let fixture: ComponentFixture<DsaApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsaApplicationComponent]
    });
    fixture = TestBed.createComponent(DsaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
