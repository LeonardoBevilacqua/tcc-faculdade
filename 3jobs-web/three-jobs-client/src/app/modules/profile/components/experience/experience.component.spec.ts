import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardTemplateComponent } from '../card-template/card-template.component';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
    let component: ExperienceComponent;
    let fixture: ComponentFixture<ExperienceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExperienceComponent, CardTemplateComponent],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
