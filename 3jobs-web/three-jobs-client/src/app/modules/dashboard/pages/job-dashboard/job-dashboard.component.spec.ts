import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

import { AnswersModalComponent } from '../../components/answers-modal/answers-modal.component';
import { CardDashboardComponent } from '../../components/card-dashboard/card-dashboard.component';
import { CardRankingComponent } from '../../components/card-ranking/card-ranking.component';
import { JobDashboardComponent } from './job-dashboard.component';

describe('JobDashboardComponent', () => {
    let component: JobDashboardComponent;
    let fixture: ComponentFixture<JobDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JobDashboardComponent, CardRankingComponent, CardDashboardComponent, AnswersModalComponent],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JobDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
