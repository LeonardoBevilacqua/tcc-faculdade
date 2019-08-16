import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { AcademicFormationComponent } from './components/academic-formation/academic-formation.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [ProfileComponent, PersonalDataComponent, UserAddressComponent, AcademicFormationComponent, CardTemplateComponent, AbilitiesComponent, ExperienceComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
  ]
})
export class ProfileModule { }
