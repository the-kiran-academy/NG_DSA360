import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewProfileComponent } from './create-new-profile.component';

describe('CreateNewProfileComponent', () => {
  let component: CreateNewProfileComponent;
  let fixture: ComponentFixture<CreateNewProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewProfileComponent]
    });
    fixture = TestBed.createComponent(CreateNewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
