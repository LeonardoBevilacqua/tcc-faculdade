import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersModalComponent } from './answers-modal.component';

describe('AnswersModalComponent', () => {
  let component: AnswersModalComponent;
  let fixture: ComponentFixture<AnswersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
