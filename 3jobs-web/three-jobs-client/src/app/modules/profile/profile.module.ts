import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AbilitiesComponent } from './components/abilities/abilities.component';
import { AcademicFormationComponent } from './components/academic-formation/academic-formation.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
    declarations: [ProfileComponent, PersonalDataComponent, UserAddressComponent, AcademicFormationComponent, CardTemplateComponent, AbilitiesComponent, ExperienceComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule,
    ],
    providers: [DatePipe]
})
export class ProfileModule { }
