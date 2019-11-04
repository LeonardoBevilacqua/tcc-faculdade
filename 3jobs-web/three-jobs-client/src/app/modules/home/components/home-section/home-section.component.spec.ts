import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionComponent } from './home-section.component';
import { InputSearchComponent } from 'src/app/shared/header/component/input-search/input-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

describe('HomeSectionComponent', () => {
  let component: HomeSectionComponent;
  let fixture: ComponentFixture<HomeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionComponent, InputSearchComponent ],
      imports: [CoreModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot(), FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
