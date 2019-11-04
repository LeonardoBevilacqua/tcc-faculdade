import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

import { AbilitiesComponent } from './abilities.component';
import { CardTemplateComponent } from '../card-template/card-template.component';

describe('AbilitiesComponent', () => {
    let component: AbilitiesComponent;
    let fixture: ComponentFixture<AbilitiesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AbilitiesComponent, CardTemplateComponent],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AbilitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
