import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicFormationComponent } from './academic-formation.component';

describe('AcademicFormationComponent', () => {
  let component: AcademicFormationComponent;
  let fixture: ComponentFixture<AcademicFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
