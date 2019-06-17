import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEmployeeComponent } from './submit-employee.component';

describe('SubmitEmployeeComponent', () => {
  let component: SubmitEmployeeComponent;
  let fixture: ComponentFixture<SubmitEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
