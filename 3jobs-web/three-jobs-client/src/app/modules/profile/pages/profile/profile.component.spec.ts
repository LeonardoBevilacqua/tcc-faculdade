import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardTemplateComponent } from '../../components/card-template/card-template.component';
import { PersonalDataComponent } from '../../components/personal-data/personal-data.component';
import { UserAddressComponent } from '../../components/user-address/user-address.component';
import { ProfileComponent } from './profile.component';
import { AcademicFormationComponent } from '../../components/academic-formation/academic-formation.component';
import { AbilitiesComponent } from '../../components/abilities/abilities.component';

describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProfileComponent,
                PersonalDataComponent,
                UserAddressComponent,
                CardTemplateComponent,
                AcademicFormationComponent,
                AbilitiesComponent,
            ],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
