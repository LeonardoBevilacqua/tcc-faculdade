import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { UserAddressComponent } from './components/user-address/user-address.component';

@NgModule({
  declarations: [ProfileComponent, PersonalDataComponent, UserAddressComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
  ]
})
export class ProfileModule { }
