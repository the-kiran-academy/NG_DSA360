import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCustomersComponent } from './agent-customers.component';

describe('AgentCustomersComponent', () => {
  let component: AgentCustomersComponent;
  let fixture: ComponentFixture<AgentCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentCustomersComponent]
    });
    fixture = TestBed.createComponent(AgentCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
