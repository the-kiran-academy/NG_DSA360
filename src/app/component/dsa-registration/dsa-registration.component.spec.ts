import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DsaRegisterationComponent } from './dsa-registration.component';


describe('DsaRegistrationComponent', () => {
  let component: DsaRegisterationComponent;
  let fixture: ComponentFixture<DsaRegisterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsaRegisterationComponent]
    });
    fixture = TestBed.createComponent(DsaRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
