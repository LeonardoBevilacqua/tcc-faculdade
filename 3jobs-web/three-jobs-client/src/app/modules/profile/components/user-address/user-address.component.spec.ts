import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardTemplateComponent } from '../card-template/card-template.component';
import { UserAddressComponent } from './user-address.component';

describe('UserAddressComponent', () => {
    let component: UserAddressComponent;
    let fixture: ComponentFixture<UserAddressComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAddressComponent, CardTemplateComponent],
            imports: [SharedModule, RouterTestingModule, ToastrModule.forRoot(), Ng4LoadingSpinnerModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
