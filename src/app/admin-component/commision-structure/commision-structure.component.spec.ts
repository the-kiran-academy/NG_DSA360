import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisionStructureComponent } from './commision-structure.component';

describe('CommisionStructureComponent', () => {
  let component: CommisionStructureComponent;
  let fixture: ComponentFixture<CommisionStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommisionStructureComponent]
    });
    fixture = TestBed.createComponent(CommisionStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
