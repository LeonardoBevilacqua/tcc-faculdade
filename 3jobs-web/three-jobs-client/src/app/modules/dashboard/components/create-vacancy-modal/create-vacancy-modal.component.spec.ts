import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacancyModalComponent } from './create-vacancy-modal.component';

describe('CreateVacancyModalComponent', () => {
  let component: CreateVacancyModalComponent;
  let fixture: ComponentFixture<CreateVacancyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVacancyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVacancyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
