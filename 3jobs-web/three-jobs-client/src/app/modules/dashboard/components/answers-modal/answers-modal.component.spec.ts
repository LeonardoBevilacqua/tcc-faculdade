import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

import { AnswersModalComponent } from './answers-modal.component';

describe('AnswersModalComponent', () => {
    let component: AnswersModalComponent;
    let fixture: ComponentFixture<AnswersModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnswersModalComponent],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
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
