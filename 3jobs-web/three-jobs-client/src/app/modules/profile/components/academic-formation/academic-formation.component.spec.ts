import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardTemplateComponent } from '../card-template/card-template.component';
import { AcademicFormationComponent } from './academic-formation.component';

describe('AcademicFormationComponent', () => {
    let component: AcademicFormationComponent;
    let fixture: ComponentFixture<AcademicFormationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AcademicFormationComponent, CardTemplateComponent],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
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
