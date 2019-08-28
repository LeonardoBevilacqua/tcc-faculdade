import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { registersComponent } from './registers.component';

describe('registersComponent', () => {
  let component: registersComponent;
  let fixture: ComponentFixture<registersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ registersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(registersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
