import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacancyModalComponent } from './create-vacancy-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

describe('CreateVacancyModalComponent', () => {
    let component: CreateVacancyModalComponent;
    let fixture: ComponentFixture<CreateVacancyModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateVacancyModalComponent],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
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
